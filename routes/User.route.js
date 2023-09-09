const {UserModel}=require("../model/User.model")
const express=require("express")
// var jwt = require('jsonwebtoken');
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {email,phone,name,score}=req.body
    try {
         const user=new UserModel({name,email,phone,score})
        await user.save()
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(400).send(`something wrong ${error}`)

    }
   
})

userRouter.get("/", async(req,res)=>{
    try {
        const user= await UserModel.find()
        res.send(user) 
    } catch (error) {
        console.log(error)
        res.status(400).send(`something wrong ${error}`)  
    }
    
})



userRouter.patch("/user/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
 try {
    await UserModel.findByIdAndUpdate({"_id":id},payload)
     res.send("Updated the user")
     }
     catch (error) {
            console.log(err)
            res.status(400).send(`something wrong ${error}`)
        }
    })


module.exports={userRouter}