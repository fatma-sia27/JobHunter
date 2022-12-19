const express = require('express')
const bcrypt = require('bcryptjs')

require('../db/conn')
const User = require('../models/userSchema')
const User2 = require('../models/userSchema2')
const router = express.Router()
router.get('/' , async(req,res) => {
    res.send("server router")
})

router.post('/JobSeeker' , async(req,res) => {

const {fname , lname , uname , password , college , stream , grad} = req.body
try{
const userExist =   await  User.findOne({uname : uname})
if(userExist){
    return res.status(422).json({error:"u have already registered"})    
 }
 const user = new User({fname , lname , uname , password , college , stream , grad})
 const userRegister = await user.save()
 if(userRegister)
 {
    res.status(201).json({message:"successfully registered"}) 
 }
else{
    res.status(402).json({message:"unsuccessfully registered"})   
}

} catch(err){
console.log(err)
}
})

router.post('/JobSeeker' , async(req,res)=>{

try{
const {uname , password} = req.body
if(!uname || !password){

    return  res.status(400).json({message:"unsuccessfull"})
}
const userLogin = await User.findOne({uname : uname})
if(userLogin){
const  isMatch = await bcrypt.compare(password , userLogin.password)




if(!isMatch){
    res.json({message:"invalid credentials"}) 
}
else {
res.json({message:"succesfully done"}) 
}
}else{
    res.json({message:"invalid "}) 
}

} 
catch(err){
console.log(err)
}
    })


    router.post('/JobProvider' , async(req,res) => {

        const {firname , lasname , usename , pwd , skills , cname , email , des} = req.body
        try{
        const userExist =   await  User2.findOne({usename : usename})
        if(userExist){
            return res.status(422).json({error:"u have already registered"})    
         }
         const user = new User2({firname , lasname , usename , pwd , skills , cname , email , des})
         const userRegister = await user.save()
         if(userRegister)
         {
            res.status(201).json({message:"successfully registered"}) 
         }
        else{
            res.status(402).json({message:"unsuccessfully registered"})   
        }
        
        } catch(err){
        console.log(err)
        }
        })
        
        router.post('/JobProvider' , async(req,res)=>{
        
        try{
        const {usename , pwd} = req.body
        if(!usename || !pwd){
        
            return  res.status(400).json({message:"unsuccessfull"})
        }
        const userLogin = await User2.findOne({usename : usename})
        if(userLogin){
        const  isMatch = await bcrypt.compare(pwd , userLogin.pwd)
        
        
        
        
        if(!isMatch){
            res.json({message:"invalid credentials"}) 
        }
        else {
        res.json({message:"succesfully done"}) 
        }
        }else{
            res.json({message:"invalid "}) 
        }
        
        } 
        catch(err){
        console.log(err)
        }
            })
        















module.exports = router