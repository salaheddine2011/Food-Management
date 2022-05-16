const mongoose=require('mongoose');
var mongoUrl='mongodb+srv://salaheddine:v8LvMGsaHhyWoN5k@cluster0.rcejn.mongodb.net/mern-pizza';
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection;
db.on('connected',()=>{
    console.log("Mongo Db Connection Successfull");
})
db.on('error',()=>{
    console.log("Mongo Db Connection failed");
})
module.exports=mongoose