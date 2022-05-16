const mongosse=require("mongoose");
const userSchema=mongosse.Schema({
    name:{type:String , require},
    email:{type:String ,require},
    password:{type:String ,require},
    isAdmin:{type:Boolean,require,default:false},
},{
    timestamps:true ,
})
module.exports=mongosse.model('users',userSchema)