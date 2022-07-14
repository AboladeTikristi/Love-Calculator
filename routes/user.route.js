const express=require('express')
const userRouter=express.Router()
const userController=require('../controllers/user.controller')
const signupController=require('../controllers/signup.controller')
const signinController=require('../controllers/signin.controller')

userRouter.get('/',signupController.check)
userRouter.post('/',signupController.signup)
//userRouter.get('/',userController.begin)
userRouter.get('/signin',signinController.checks)
userRouter.post('/signin',signinController.signin)
userRouter.get('/index',userController.begin)
//userRouter.post('/index',signinController.calc)

userRouter.post('/calc',userController.calc)
userRouter.post('/delete',userController.del)
userRouter.post('/view',userController.view)
userRouter.post('/view/close',userController.close)

//userRouter.get('/signup',userController.signup)
module.exports=userRouter
