import Header from "../components/Header";
import "../Styles/details.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')
export default function RestaurantDetail() {


  const { rName } = useParams();
  const [restaurant,setRestaurant] = useState([])
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [menu, setMenu] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=>{
    fetch(`https://zomato-frontend-bdj9ldt7l-yash-titirmares-projects.vercel.app/restaurant/details/${rName}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>setRestaurant(data.data))
  },[])
  
  const fetchMenu = ()=>{
    fetch(`https://zomato-frontend-bdj9ldt7l-yash-titirmares-projects.vercel.app/menu/${rName}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>setMenu(data.data))
  }

  const calTotalPrice=(item)=>{
    let price = totalPrice+ item.itemPrice;
    setTotalPrice(price)
  }

  const RemovePrice = (item)=>{
    let price = totalPrice - item.itemPrice;
    setTotalPrice(price)
     }
  const loadScript = (src)=>{
    return new Promise((resolve)=>{
      const script = document.createElement("script")
      script.src=src;
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  const openRazorpay=async()=>{
   try{ //create order in razorpay by calling backend API
    let orderData;
    orderData = await fetch('https://zomato-frontend-bdj9ldt7l-yash-titirmares-projects.vercel.app/pay',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({amount:totalPrice})
    }).then(resp=>resp.json())



//open razorpay window
    const options ={
       key:"rzp_test_UmWUiu9OPckl7e",
       name:"Zomatao Food Delivery App",
       amount:orderData.amount,
       currency:orderData.currency,
       order_id:orderData.id,
       prefill:{
        email:'abc1245@shbiso.com',
        contact:'202-555-0153'
       },
       handler:function(response){
        //call api that would would save transaction id
        fetch('https://zomato-frontend-bdj9ldt7l-yash-titirmares-projects.vercel.app/pay/save',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            razorpay_order_id:response.razorpay_order_id,
            razorpay_payment_id:response.razorpay_payment_id,
            razorpay_signature:response.razorpay_signature,
            razorpay_amount:orderData.amount
          })
        }).then(resp=>console.log(resp))
       }
    }
    const paymentWindow=new window.Razorpay(options);
    paymentWindow.open()

  }catch(error){
    console.log(error)
  }
}

  //behave like componentDidMount method if second parameter is blank array 
  const restObj=restaurant.length?restaurant[0]:{};
  const{name,thumb,cost,address,Cuisine}=restObj;
  const cuisineValues= !(Cuisine==undefined ) && Cuisine.length && Cuisine.map((item)=><div className="value">{item.name}</div>)
 // console.log(thumb)
  return (
    <div>
      <Header></Header>
      <div>
        <img src={thumb} width="100%" height="500px"/>
        
      </div>
        <div>
          <h1>{name}</h1>
          <button 
          className="btn btn-danger" 
          style={{float : "right",position: "relative",right : "127px"}} 
          onClick={()=>{
            setIsMenuModalOpen(true)
            fetchMenu();
            }}>
            Place Online Order
          </button>  
        </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Contact</Tab>
          </TabList>

          <TabPanel>
            <div className="about">About the place</div>
            <div className="head">Cuisine</div>
            {cuisineValues}
            <div className="head">Average Cost</div>
            <div className="value">&#8377; {cost}</div>
          </TabPanel>
          <TabPanel>
            <div className="head">Phone Number</div>
            <div className="value">+91-9876543217</div>
            <div className="head">{name}</div>
            <div className="value">{address}</div>
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <Modal 
          isOpen={isMenuModalOpen}
          className="ReactModal__Content"
        >
          <div>
            <div className="row" >
              <div className="col-sm-9">
                <h2 className="Place-menu">Menu</h2>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-danger close float-end" onClick={()=>setIsMenuModalOpen(false)}>X</button>
              </div>
            </div>
            <hr />
            <ul>
              {
                menu.length && menu.map((item,index)=><li key={index}>
                    <div className="veg__non-veg">
                      {
                        item.isVeg ? <span className="text-success">Veg</span>:<span className="text-danger">Non-Veg</span>
                      }
                    </div>
                    <div className="cuisines">
                    {item.itemName}
                    </div>
                    <div className="cuisines">&#8377; {item.itemPrice}</div>
                    <div className="cuisines">{item.itemDescription}</div>
                    <div>
                      <button className="ADD" onClick={()=>calTotalPrice(item)}>+</button>
                      <button className='REMOVE Remove-itemPrice' onClick={()=>RemovePrice(item)}>-</button>
                    </div>
                  </li>)
              }
            </ul>
            <hr />
            <div>
              <h3>Total Price:{totalPrice}</h3>
              <button className="btn btn-success" onClick={()=>{setIsMenuModalOpen(false); 
                loadScript('https://checkout.razorpay.com/v1/checkout.js'); openRazorpay();}}>Pay Now</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
