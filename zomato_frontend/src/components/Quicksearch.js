import React, { Component } from "react";
import "../Styles/Quicksearch.css";
import Mealtype from "./Mealtype";
export default class extends Component {
  constructor() {
    super();
    this.state = {
      mealtypes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3038/mealtype", { method: "GET" })
      .then((response) => response.json())
      .then((data) => this.setState({ mealtypes: data.data }));
  }

  
  render() {
    let quickSearchList =
      this.state.mealtypes.length &&
      this.state.mealtypes.map((item) => (
        <Mealtype item={item} key={item.name}></Mealtype>
      ));
    return (
      <div>
        <div className="quicksearch">
          <h1 className="quicksearch__heading">Quick Searches</h1>
          <h4 className="quicksearch__text">
            Discover restaurants type by meal
          </h4>
          <div className="container-fluid">
            <div className="row">
              {quickSearchList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
