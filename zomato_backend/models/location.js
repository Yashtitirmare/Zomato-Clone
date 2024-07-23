// describe to node.js how is the structure of restaurant collection in zomato DB
const mongoose = require('mongoose');

// create a schema for fetched the data from the database of Assingment_6

const locationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city_id:{
        type:String,
        required:true
    },
    location_id:{
        type:String,
        required:true
    },
    country_name:{
        type:String,
        required:true
    }    
});

module.exports=mongoose.model("Locations",locationSchema,"location");

