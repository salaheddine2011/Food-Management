
const express=require("express")
const db=require("./db.js")
const Pizza=require("./Models/pizzaModel");
const app=express();
app.use(express.json());

const pizzasRoute=require('./routes/pizzasRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)

//app.listen(port,()=>'server runing on port port ');

// app.use('/api/users/login')

app.get('/',(req,res)=>{
    res.send("server Working"+port);
});

const port=process.env.port || 8000;
app.listen(port,()=>'server runing on port port ');

// app.get("/getpizzas",(req,res)=>{
// pizza.find({},(err,docs)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         res.send(docs)
//     }
// })
// });