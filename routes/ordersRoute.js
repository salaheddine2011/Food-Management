const { response } = require('express');
const express=require('express')
const router=express.Router()
const { v4 : uuidv4 }= require('uuid');
const Order=require('../Models/orderModel')
const stripe=require("stripe")("sk_test_51KsQbOEO4CLzb7D4QvDUf5SxQ30WqMA460OkrbRT94m4VtjXjqhANarCqQm0FPVGqkLOadtuuvS0R68ys4UZprqc00B98T7DH7")
router.post("/placeorder",async (req,res)=>{
const {token,subtotal,currentUser,cartItems}=req.body
try {
    const customer=await stripe.customers.create({
        email: token.email,
        source:token.id        
    })
    const payment=await stripe.charges.create({
        amount:subtotal*100,
        currency:'MAD',
        customer:customer.id,
        receipt_email:token.email
    },{
        idempotencyKey:uuidv4()
    })
    if(payment){
        const neworder=new Order({
            name:currentUser.name,
            email:currentUser.email,
            userid:currentUser._id,
            orderItems:cartItems,
            orderAmount:subtotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                counter:token.card.address_country,
                pincode:token.card.address_zip
            },
            transactionId:payment.source.id
        })
        neworder.save()
        res.send('Order Placed Successfully')
    }
    else{
        res.send('Payment Failed')
    }
} catch (error) {
    return res.status(400).json({message:'Something went Wrong'+error})
}
})

router.post("/getuserorders",async (req,res)=>{
    const {userid}=req.body
    try{
const orders = await Order.find({userid:userid}).sort({_id:-1})
res.send(orders)
    }catch(error){
        return res.status(400).json({message:'Something went wrong '})
    }
})
 module.exports=router