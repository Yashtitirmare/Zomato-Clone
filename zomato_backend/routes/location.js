const express=require('express');
const locationcontroller=require('../controller/location')

const router=express.Router();

//conifgure all routes
router.get('',locationcontroller.getAllLocations)
router.get('/:name',locationcontroller.getAllLocationsByname)
router.get('/details/:location_id',locationcontroller.getAllLocationsByDetails)


module.exports=router;