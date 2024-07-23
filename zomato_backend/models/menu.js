// describe to node.js how is the structure of restaurant collection in zomato DB
const mongoose = require('mongoose');

// create a schema for fetched the data from the database of Assingment_6

const menuSchema = new mongoose.Schema({
    restaurantId:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    itemDescription:{
        type:String,
        required:true
    },
    isVeg:{
        type:Boolean,
        required:true
    },
    restaurantName:{
        type:String,
        required:true
    }      
});

module.exports=mongoose.model("Menus",menuSchema,"menu");