require('dotenv').config()
const express=require("express")
const mongoose=require("mongoose")
const app=express();

app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGODB_CONNECT_URI)
// mongoose.connect('mongodb://localhost:27017/UserData')
.then(()=>{
    console.log("Database Connection")
}).catch(()=>{
    console.log("Something went wrong")
})
const User=require("./models/user")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render('index');
}) 
app.post("/",async(req,res)=>{
    const data=new User(req.body)
    await data.save()
    res.send("Save Data")

})
const port=8080;
app.listen(port,()=>{
    console.log('Server is listening on port '+port);
});
