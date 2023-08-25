const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    sname:{
        type:String
    },
   bs:{
        type:String
    },
    indicator:{
        type:String
    },
   trading:{
        type:String
    
},
pl:{
    type:Number

}
});
const User=mongoose.model('User',userSchema)
module.exports=User