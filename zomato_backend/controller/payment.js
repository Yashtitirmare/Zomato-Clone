const Razorpay = require('razorpay')
const crypto=require('crypto')
const shortid=require("shortid")
const Transactions=require('../models/transaction')
const { error } = require('console')

const instance=new Razorpay({
    key_id:"rzp_test_UmWUiu9OPckl7e",
    key_secret: "zAv2ya841bKXyCcK1WAOhujH"
})


exports.saveTransaction=(req,res)=>{
    console.log("saving Transaction!")

    const generated_signature=crypto.createHmac('sha256',instance.key_secret);
    generated_signature.update(req.body.razorpay_order_id+"|"+req.body.razorpay_payment_id)
    
    if(req.body.razorpay_signature==generated_signature.digest('hex')){
        console.log("creating transaction object")
        //save transaction to collection 
        const transaction=new Transactions({
            transaction_id:req.body.razorpay_payment_id,
            transaction_amount:req.body.razorpay_amount
        });

        transaction.save(function(err,saveTransaction){
            if(err){
                console.log(error);
                return res.status(500).send("some error occured",error)
            }
            console.log("transaction save in db")
            res.send({transaction:transaction})
        })
    }

}

exports.createOrder=async(req,res)=>{
    console.log("payment initiated")
    const options = {
        amount:req.body.amount*100,//convert paisa formate to rupees
        currency: "INR",
        receipt:shortid.generate(),
        notes: {   
             key1:"value3",    
             key2: "value2"  
            }
        }
    try{
        const response = await instance.orders.create(options)
        console.log(response)
        res.json(response)
    }catch(error){
        console.log(error)
    }
    
    
}