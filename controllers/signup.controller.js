const loveModel=require('../models/user.model')
const check=(req,res)=>{
    loveModel.find((err,result)=>{
        if(err){
              console.log("data not collected")
        }
        else{
              console.log("here")
                 res.render("signup",{allUsers:result})
        }
  })
   
}
const signup=(req,res)=>{
    
    console.log(req.body)
    let email=req.body.email
    let password=req.body.password
    var load={ email:email,password:password,history:[],}
    console.log(load)
   
    loveModel.find({email:req.body.email},(err,result)=>{
        if(err){
            console.log(`error dey`)
        }else{
            if(result.length>0){
                console.log(result)
                console.log(`user exists`)
            }
            else{
               let form= new loveModel(load)
                form.save((err,result)=>{
                if (err) {
                        console.log(result)
                        console.log(err)
                }
                else{
                    res.redirect("/user/signin") 

                }

    }) 
            }
        }
    })
    
}
module.exports={check,signup}