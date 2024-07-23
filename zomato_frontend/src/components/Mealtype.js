import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Mealtype extends Component {
  render() {
    const {name,content,image} = this.props.item
    return (
        <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="tileContainer">
            <div className="tileComponent1">
                <img src={require('../' + image)} height="150" width="140" alt='image'/>
            </div>
            <div className="tileComponent2">
                <div className="componentHeading">
                    <Link to={'/filter'} style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '20px'}}>{name}</Link>
                </div>
                <div className="componentSubHeading">
                {content}
                </div>
            </div>
        </div>
    </div>
    )
  }
}
