const express= require("express")
const app= express();
const ejs=require('ejs');
let path = require("path");
app.use('/public/', express.static('./public'));
app.use(express.static("public"))
const bodyParser=require("body-parser");
const userRouter=require('./routes/user.route')
//const signupRouter=require('./routes/signup.route')
const mongoose=require("mongoose")
const URI="mongodb+srv://AboladeTikristi:tikristi@cluster0.8i7iv.mongodb.net/love_calculator?retryWrites=true&w=majority"
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect(URI,(err)=>{
      if (err) {
        console.log("mongoose not connected yet")
        console.log(err)    
      }
      else{console.log('mongoose connected successfully')}
})
app.set("view engine","ejs");
app.use("/user",userRouter)
//app.use("/user",userRouter)



app.listen(4007,()=>{
console.log(`listening at 4007`)
})