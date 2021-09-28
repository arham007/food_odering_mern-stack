const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const CartSchema=new Schema({
  shoppingCart:{
      type:[{}],required:true
  },
  qty:{
      type:Number,
      required:true
  },
  totalPrice:{
      type:Number,
      required:true
  }
})

mongoose.model("Cart",CartSchema)