const mongoose=require('mongoose')
let loveSchema=mongoose.Schema({
    email:String,
    password:String,
    history:[],

})
let loveModel=mongoose.model("participant_tb",loveSchema)
module.exports=loveModel;