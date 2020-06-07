const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    name:  {type:String,required:true,trim:true}, 
    photo:  {type:String,default:'nopic.png'}, 
    location: {
        lat:Number,
        lgn:Number
    }
  },{
      timestamps:true,
      collection:'shops'
  });
const shop = mongoose.model('Shop',schema);
module.exports = shop;