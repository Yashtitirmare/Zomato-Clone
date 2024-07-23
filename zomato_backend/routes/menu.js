const express=require('express');
const menucontroller=require('../controller/menu');


const router=express.Router();

//conifgure all routes
router.get('/:rName',menucontroller.getAllMenus)


module.exports=router;