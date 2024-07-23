import React from 'react'
import '../Styles/Footer.css'
import googleplay from'../Assets/googleplay.png'
import appstore from '../Assets/appstore.png'
import { Link } from "react-router-dom";
function Footer() {
  return (
    
    <div className="Footercontainer">
    <hr className="Breakline" width="1250px"></hr>
     <div className="logo-select-div">
     <Link to='/' style={{textDecoration: 'none'}}><img  className="Zomatoimg" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*"/></Link>
        <div className="selectDrop" >
        <select className="country">
            <option value="">India</option>
        </select>
        <select className="language">
            <option value="">English</option>
        </select>
       </div>
     </div>
     <br/>
     <br/>
     <div className="gridSystem" >
        <div className="grid1">
            <h6>ABOUT  ZOMATO</h6>
            <nav>
                <a  href="#" target="_blank"><p>Who we are</p></a>
                <a  href="#" target="_blank"><p>Blog</p></a>
                <a  href="#" target="_blank"><p>Work with Us</p></a>
                <a  href="#" target="_blank"><p>invester Relations</p></a>
                <a  href="#" target="_blank"><p>Report fraud</p></a>
            </nav>
        </div>
        <div className="grid2">
            <h6>ZOMAVERSE</h6>
            <nav>
                <a  href="https://zomato-frontend-bdj9ldt7l-yash-titirmares-projects.vercel.app/" target="_blank"><p>Zomato</p></a>
                <a  href="#" target="_blank"><p>Feeding india</p></a>
                <a  href="#" target="_blank"><p>Hyperpure</p></a>
                <a  href="#" target="_blank"><p>Zomaland</p></a>
            </nav>
        </div>
        <div className="grid3">
            <h6>FOR RESTAURANTS</h6>
            <nav>
                <a  href="#" target="_blank"><p>Partner with us</p></a>
                <a  href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US" target="_blank"><p>App for you</p></a>
               
                <h6>FOR ENTERPRISES</h6>
                <a  href="#" target="_blank"><p>Zomato for Work</p></a>
            </nav>
        </div>
        <div className="grid4">
            <h6>LEARN MORE</h6>
            <nav>
                <a  href="#" target="_blank"><p>Privacy</p></a>
                <a  href="#" target="_blank"><p>Security</p></a>
                <a  href="#" target="_blank"><p>Terms</p></a>
                <a  ><p> Sitemap</p></a>
            </nav>
        </div>
        <div className="grid5">
            <h6>SOCIAL LINKS</h6>
            <nav >
             <div className='googleplay'>
                <a href="https://play.google.com/store/search?q=zomato&c=apps" target="_blank">
                  <img height="48px" src={googleplay} alt=""/></a>
             </div> 
             <div className='appstore'>
              <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" target="_blank">
                <img height="44px" src={appstore} alt=""/></a>  
            </div> 
            </nav>
        </div>

     </div>
     <hr/>
     <p className="copyright" >🏎🏎Yash Titirmare All rights reserved.🏎🏎 </p>
   </div> 
  )
}

export default Footer