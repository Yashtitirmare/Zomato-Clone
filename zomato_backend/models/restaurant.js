// describe to node.js how is the structure of restaurant collection in zomato DB
const mongoose = require('mongoose');

// create a schema for fetched the data from the database of Assingment_6

const restaurantSchema = new mongoose.Schema({
    // _id:{
    //     type:Number,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    city_name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    thumb:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:Array,
        required:true
    },
    Cuisine:{
        type:Array,
        required:true
    }    
});

module.exports=mongoose.model("Restaurants",restaurantSchema,"restaurants");

