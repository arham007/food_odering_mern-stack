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
   desc:{
       type:String,
       default:"no value"
       
   },
   disable:{
    type:String,
    required:true
},
   price:{
       type:String,
       required:true
   }
},{timestamps:true})

mongoose.model("Products",ProductSchema);