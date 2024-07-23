const express=require('express');
const mealtypecontroller=require('../controller/mealtype');


const router=express.Router();

//conifgure all routes
router.get('',mealtypecontroller.getAllMealTypes)


module.exports=router;