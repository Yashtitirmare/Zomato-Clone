//  const restaurants = require("../models/restaurant.json");
// const fs = require("fs");
const Menus=require('../models/menu')

exports.getAllMenus=(req,res)=>{
    let filter={
      restaurantName:req.params.rName
    }
    console.log(filter)
    Menus.find(filter)
    .then(
      result=>{
        res.status(200).json({message:"Menu fetched successfully", data:result
      })
      }
    )
    .catch(error=>{
      res.status(500).json({
        message:"Error in database",
        error:error
      })
    })
}