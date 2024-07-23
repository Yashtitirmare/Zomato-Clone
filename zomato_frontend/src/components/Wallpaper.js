import React, { Component } from 'react'
import homepage from '../Assets/homepageimg.png'
import '../Styles/Wallpaper.css'
import {Link} from 'react-router-dom'
import Header from './Header';
export default class Wallpaper extends Component {
  constructor(){
    super();
    console.log(" wallpaper constructor getting called...")
    this.state={
      locations:[],
      restaurants:[]
    }
  }
  

  componentDidMount(){
    //call api here
    fetch('http://localhost:3038/location',{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({locations:data.data}))
  }

  fetchRestaurants = (event)=>{
    console.log(event.target.value)
    fetch(`http://localhost:3038/restaurant/${event.target.value}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>{this.setState({restaurants:data.data});console.log(data.data)})
  }

  render() {
    let locationOptions=this.state.locations.length && this.state.locations.map((item)=><option key={item.name} value={item.city_id}>{item.name}</option>) 
    let restaurantsList=this.state.restaurants.length && <ul>
      {
        this.state.restaurants.map((item)=>
        <li key={item.name}>
          <Link to={`/details/${item.name}`} style={{textDecoration: 'none', color: 'black'}}>
            {item.name}
          </Link>
        </li>)
      }
    </ul>
    return (
      
      <div>
        <Header/>
        <div id='homepage'> 
          <img src={homepage} width='100%' height='500'/>
          <div className="carousel_caption d-none d-md-block">
            <div className="logo">
              <p>e!</p>
            </div>
            <div className='heading'>
              Find the best restaurants, cafes, and bars
            </div>
          </div>
          <div className="locationselecter">
            <select className="location" onChange={this.fetchRestaurants}>
              <option value="0">Select location</option>
              {locationOptions}
            </select>
            <div className="notebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <input className="searchbar" type="search" placeholder="Search for restaurants, cuisine or a dish"  aria-label="Search"/>
              {restaurantsList} 
            </div>
          </div> 
        </div>
      </div>
    )
  }
}


