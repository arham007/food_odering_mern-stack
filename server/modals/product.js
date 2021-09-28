const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ProductSchema=new Schema({
   name:{
       type:String,
       required:true
   },
   image:{
       type:String,
       required:true
   },
   type:{
       type:String,
       required:true
   },
   des:{
       type:String
   },
   price:{
       type:String,
       required:true
   }
},{timestamps:true})

mongoose.model("Products",ProductSchema);