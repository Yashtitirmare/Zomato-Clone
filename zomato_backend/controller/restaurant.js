//  const restaurants = require("../models/restaurant.json");
// const fs = require("fs");
const Restaurants = require("../models/restaurant");

exports.getAllRestaurants = (req, res) => {
  Restaurants.find()
    .then((result) => {
      res
        .status(200)
        .json({ message: "data fetched successfully", data: result });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error in database",
        error: error,
      });
    });
};

exports.getAllRestaurantsByCity=(req,res)=>{
  let criteria = {city:req.params.cName}
  Restaurants.find(criteria)
        .then(
          result=>{
            res.status(200).json({ 
              message: "data fetched successfully", 
              data: result });
          }
        )
        .catch(
          error=>{
            res.status(500).json({
              message: "Error Occured!!",
              error: error
            })
          }
        )
}

exports.getAllRestaurantsByFilter=(req,res)=>{
  //filter by city_ids
  let filter={}
  if(req.body.city_id){
    filter.city=req.body.city_id
  }
  //dispaly the cuisine name
  if(req.body.cuisine && req.body.cuisine.length>0){
    filter['Cuisine.name']={$in: req.body.cuisine}
  }
  console.log('lcost:',req.body.lcost)
  console.log('hcost:',req.body.hcost)
  if(req.body.lcost !=='' && req.body.lcost==0){
    console.log('enterd here')
    filter.cost={
      $lt: req.body.hcost
    }
  }else         //greater than 500 cost
  if(req.body.lcost && req.body.hcost){       
     
    filter.cost={
        $lt:req.body.hcost,
        $gt:req.body.lcost
    }
  }

  //filter,skip by page,and sort method for filter the restaurants according request
  let sort=1;
  
  if(req.body.sort){
      sort=req.body.sort
  }
  console.log("filter:",filter)
  Restaurants.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:sort})
  .then(
    result => {
      Restaurants.find(filter).count((err,count)=>{
        if(err)
          console.log(err)
          else
          res.status(200).json({ 
            message: "data fetched successfully", 
            data: result,
            totalRecords:count 
          })
      })
  }
)
    
  .catch((error) => {
    res.status(500).json({
      message: "Error in database",
      error: error,
    });
  });


}

//get all restaurant with there details after calling it by name
exports.getAllRestaurantsByDetails=(req,res)=>{
  let criteria = {name:req.params.name}
  Restaurants.find(criteria)
        .then(
          result=>{
            res.status(200).json({ 
              message: "data fetched successfully", 
              data: result });
          }
        )
        .catch(
          error=>{
            res.status(500).json({
              message: "Error Occured!!",
              error: error
            })
          }
        )
}

