const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new mongoose.Schema({
    transaction_id:{
        type:String
    },
    transaction_amount:{
        type:String
    }
})



module.exports=mongoose.model("Transactions",transactionSchema);