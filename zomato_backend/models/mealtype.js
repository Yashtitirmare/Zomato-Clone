// describe to node.js how is the structure of restaurant collection in zomato DB
const mongoose = require('mongoose');

// create a schema for fetched the data from the database of Assingment_6

const mealtypeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }    
});

module.exports=mongoose.model("MealTypes",mealtypeSchema,"mealtype");

