const mongoose =require("mongoose")
const Schema=mongoose.Schema
const {ObjectId}=mongoose.Schema.Types
const OrderSchema=new Schema({
    user:{
        type:ObjectId,
        ref:"User",
        required:true
    },
    items:{
        type:[{}],
        required:true
    },
    staus:{
        type:String,
        default:"order_placed",
     
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    note:{
        type:String,
        default:"no value"
    },
    disable:{
        type:Boolean,
        default:"false"
    },
    paymentType:{
        type:String,
        default:"COD",
        
    }


},{timestamps:true})

mongoose.model("Order",OrderSchema)