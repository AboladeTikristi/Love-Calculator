const loveModel=require('../models/user.model')
const loveHistModel=require('../models/history.model')
const checks=(req,res)=>{
    loveModel.find((err,result)=>{
        if(err){
              console.log("data not collected")
        }
        else{
              console.log("here")
                 res.render("signin",{allUsers:result})
        }
  })
   
}
const signin=(req,res)=>{
   
    console.log(req.body)
    let email=req.body.email
    let password=req.body.password
  
    loveModel.find({email:req.body.email},(err,result)=>{
        if(err){
            console.log(`error dey`)
        }
        else{
            if(result.length>0){
                
               console.log(result)
              let here=result[0]._id
              let loginDetails={email:email,ind:here}
              loveHistModel.find((err,result)=>{
                    if(result.length>0){
                        let see=result[0]._id
                        loveHistModel.findByIdAndUpdate(see,loginDetails,(err, result)=> {
                        if (err){
                            console.log(err)
                        }
                        else{
                            console.log("Original Doc : ", result);
                            res.redirect("/user/index") 
                        }
                        })
                        }
                    else{
                          let form= loveHistModel(loginDetails)
                            form.save((err,result)=>{
                            if (err) {
                                    console.log(result)
                                    console.log(err)
                            }
                            else{
                                res.redirect("/user/index") 

                            }

                            }) 
                    }
              })
             
            
            }
            else{
             res.render("signup")
            }
        }
    })
    
}
module.exports={checks,signin}