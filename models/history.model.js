const mongoose=require('mongoose')
let loveHistSchema=mongoose.Schema({
    email:String,
    ind:{},
    

})
let loveHistModel=mongoose.model("Hist_tb",loveHistSchema)
module.exports=loveHistModel;