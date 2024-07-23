import React, { useState, useEffect } from "react";
import "../Styles/Filter.css";
import Header from "./Header";
import {Link} from "react-router-dom"
import Footer from "./Footer";

export default function Filter() {
    const [restaurants, setRestaurants] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [currentPageNo, setCurrentPageNo] = useState(1)
    const [restaurantList, setRestaurantList] = useState([])
    const [filter, setFilter] = useState({
        city_id: '',
        cuisine: [],
        lcost: 0,
        hcost: 0,
        sort: 1,
    });
    const requestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filter),
    };

    useEffect(() => {
        //fetch
        fetch(`http://localhost:3038/restaurant/filter/${currentPageNo}`, requestOption)
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data.data);
                setPageCount(Math.ceil(data.totalRecords / 2));
            });
    }, [filter, currentPageNo]);

    useEffect(() => {
        fetch("http://localhost:3038/location", { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setRestaurantList(data.data)

            })
    }, [])

    //onchane of fetch data from restaurant api need setstate to render the data
   const fetchRestaurants = (event) => {
    setFilter({...filter, city_id:event.target.value})
   };

   let locationoptions = restaurantList && restaurantList.map((item) => {
    return (
      <option key={item.name} value={item.city_id}>
          {item.name}
      </option>
      );
    });


    // const handleLocationChange = (event) => {
    //     console.log(event.target.value)
    //     filter.city = (event.target.value)
    //     setFilter({ ...filter })
    // }


    const handleCuisineChange = (event) => {
        // console.log("handleCuisineChange called",event.target)
        if (event.target.checked) filter.cuisine.push(event.target.name);
        else {
            let index = filter.cuisine.indexOf(event.target.name);
            if (index > -1) filter.cuisine.splice(index, 1);
        }
        setFilter({ ...filter });
    };

    const handleCostChange = (lcost, hcost) => {
        // console.log('called')
        filter.lcost = lcost;
        filter.hcost = hcost;
        setFilter({ ...filter });
    };

    const handleSort = (s) => {
        console.log(s);
        filter.sort = s;
        setFilter({ ...filter });
    };

    const paginationItems = [];
    for (let i = 1; i <= pageCount; i++) {
        paginationItems[i] = <a href="#" onClick={() => setCurrentPageNo(i)}>{i}</a>
    }

    //button increment and decrement 
   const drecement = ()=>{    
    setCurrentPageNo(currentPageNo-1)
    
   }
   const increment = ()=>{
    setCurrentPageNo(currentPageNo+1)
   }
    return (
        <div>
            <Header />
            <div id="myId" className="heading-filter">Breakfast Places in Delhi</div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="filter-options">
                            <span className="glyphicon glyphicon-th-list toggle-span" data-toggle="collapse"
                                data-target="#demo"></span>
                            <div id="demo" className="collapse show">
                                <div className="filter-heading">Filters</div>
                                <div className="Select-Location">Select Location</div>
                                <select className="Rectangle-2236" onChange={fetchRestaurants} >
                                    <option value={0}>Select</option>
                                    {locationoptions}

                                </select>
                                <div className="Cuisine">Cuisine</div>
                                <div>
                                    <input type="checkbox" name="North Indian" onChange={(e) => handleCuisineChange(e)} />
                                    <span className="checkbox-items">North Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" name="South Indian" onChange={(e) => handleCuisineChange(e)} />
                                    <span className="checkbox-items">South Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" name="Chineese" onChange={(e) => handleCuisineChange(e)} />
                                    <span className="checkbox-items">Chineese</span>
                                </div>
                                <div>
                                    <input type="checkbox" name="Fast Food" onChange={(e) => handleCuisineChange(e)} />
                                    <span className="checkbox-items">Fast Food</span>
                                </div>
                                <div>
                                    <input type="checkbox" name="Street Food" onChange={(e) => handleCuisineChange(e)} />
                                    <span className="checkbox-items">Street Food</span>
                                </div>
                                <div className="Cuisine">Cost For Two</div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(1, 500)} />
                                    <span className="checkbox-items">Less than &#8377; 500</span>
                                </div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(500, 1000)} />
                                    <span className="checkbox-items">&#8377; 500 to &#8377; 1000</span>
                                </div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(1000, 1500)} />
                                    <span className="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
                                </div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(1500, 2000)} />
                                    <span className="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
                                </div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(2000, 3000)} />
                                    <span className="checkbox-items">&#8377; 2000 +</span>
                                </div>
                                <div>
                                    <input type="radio" name="cost" onChange={() => handleCostChange(1, 3000)} />
                                    <span className="checkbox-items">All</span>
                                </div>
                                <div className="Cuisine">Sort</div>
                                <div>
                                    <input type="radio" name="sort" checked={filter.sort === 1} onChange={() => handleSort(1)} />
                                    <span className="checkbox-items">Price low to high</span>
                                </div>
                                <div>
                                    <input type="radio" name="sort" checked={filter.sort === -1} onChange={() => handleSort(-1)} />
                                    <span className="checkbox-items">Price high to low</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 scroll">
                        {
                            restaurants.length > 0 ? restaurants.map((item) =>
                                <div className="Item" key={item.name} >
                                    <div className="row pl-1">
                                        <div className="col-sm-4 col-md-4 col-lg-4">
                                            <img className="img" src={item.thumb} alt="iamge"/>
                                        </div>
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                        <Link to={`/details/${item.name}`} style={{textDecoration: 'none', color: 'blue'}}><div className="rest-name" >{item.name}</div></Link>
                                            <div className="res-location">{item.locality}</div>
                                            <div className="rest-address">{item.city_name}</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row padding-left">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="rest-address">CUISINES : {item.Cuisine.length && item.Cuisine.map((item) => item.name + ' ')}</div>
                                            <div className="rest-address">COST FOR TWO : {item.cost} </div>
                                        </div>
                                    </div>
                                </div>

                            ) : <div className="noData"> No Data Found</div>
                        }
                    </div>
                </div>
                <div>
                    <div className="pagination">
                    {currentPageNo !=1 ? <a href="#" onClick={drecement}>&laquo;</a>: null}
                        {paginationItems}
                        {currentPageNo != pageCount ? <a href="#" onClick={increment}>&raquo;</a> : null}
                    </div>
                </div>


            </div>
            <Footer/>
            <br></br>
        </div>

    );
}
