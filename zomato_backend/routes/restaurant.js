const express=require('express');
const restaurantcontroller=require('../controller/restaurant');


const router=express.Router();

//conifgure all routes
router.get('',restaurantcontroller.getAllRestaurants)
router.get('/:cName',restaurantcontroller.getAllRestaurantsByCity) // using URL parameter
router.get('/details/:name',restaurantcontroller.getAllRestaurantsByDetails)
router.post('/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)



module.exports=router;