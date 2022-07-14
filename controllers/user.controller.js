const loveModel=require('../models/user.model')
const loveHistModel=require('../models/history.model')
const begin=(req,res)=>{
    loveModel.find((err,result)=>{
        if(err){
              console.log("data not collected")
        }
        else{
              var inds;
              loveHistModel.find((err,result)=>{
                  if(err){
                        console.log(err)
                  }
                  else{
                        inds=result[0].ind;
                        console.log(result[0].ind)
                        console.log("here")
                        console.log(inds)
                        loveModel.find({_id:inds},(err,result)=>{
                        console.log('here')
                        console.log(result)
                        console.log('here')
                        res.render("index",{allUsers:result})
                  })
                  }
              })
                
                 
        }

  })
}
const calc=(req,res)=>{ 
      console.log(req.body)
    const userDetails=req.body.firstperson;
    const userDetails2=req.body.secondperson;
    const userDetails3=req.body.index;
   
    var fp=parseInt(req.body.firstperson.length+"0");
    var sp=parseInt(req.body.secondperson.length+"0");
    var ans;
    var percent=Math.ceil(
          (
                (fp+sp)/(sp/4)
                )*10); 
    if (percent==50) {
          ans="There is but make sure to cherish it. /n you are at risk of loss"
    }
    else if ( percent<=100) {
      ans="There is , Your love is a like a beautiful never ending adventure."
    }
    else{
          ans="There is but it at risk of falling off the cliff, stop overdoing it!"
    }
    
    console.log(percent)
    var load={firstperson:userDetails,secondperson:userDetails2,percentCalc:percent,answer:ans}
    console.log(load)

    //let index=req.body.ind
     let updateDetails=req.body
     loveModel.updateOne(
      { _id:userDetails3},
      { $push: { history : load } },
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/user/index")
          console.log(result)
        }
      }
    );

}
const del=(req,res)=>{
      let myIndex=req.body.ind
      let myIndex2=req.body.inds
      loveModel.findOne({_id:myIndex2},(err,result)=>{
            result.history.splice(myIndex,1)
            result.save((err,result)=>{
                  if (err) {
                        console.log(err)
                  }
                  else{
                        console.log(result)
                  }
            })
      })
}
const view=(req,res)=>{
      let gets=parseInt(req.body.ind);
      let get=req.body.inds;
      loveModel.findOne({_id:get},(err,result)=>{
           if(err){
              console.log("error!!")
              console.log(err)
          }
          else{
          let currentPart=result.history[gets] 
          res.render("show",{currentPart,get})
          }
      })
}
const close=(req,res)=>{
      loveModel.find((err,result)=>{
            if(err){
               console.log("error!!")
               console.log("error!!")
           }
           else{
           let allUsers=result 
           res.redirect("/user/index")
           }
       })
     
}
module.exports={begin,calc,del,view,close}