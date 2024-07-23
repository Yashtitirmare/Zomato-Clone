const Locations=require('../models/location')

exports.getAllLocations=(req,res)=>{
  Locations.find()
    .then(
      result=>{
        res.status(200).json({message:"data fetched successfully", data:result
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

//get all restaurant with there details after calling it by name
exports.getAllLocationsByname=(req,res)=>{
  let criteria = {name:req.params.name}
  Locations.find(criteria)
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

//get all restaurant location with there details after calling it by location_id
exports.getAllLocationsByDetails=(req,res)=>{
  let criteria = {location_id:req.params.location_id}
  Locations.find(criteria)
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