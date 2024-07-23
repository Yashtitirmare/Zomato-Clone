const MealTypes=require('../models/mealtype')

exports.getAllMealTypes=(req,res)=>{
    MealTypes.find()
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


