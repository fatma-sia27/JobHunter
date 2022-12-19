const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    fname:{
        type: String , 
        require: true
    },
    lname:{
        type: String , 
        require: true
    },
    uname:{
        type: String , 
        require: true
    },
   
    password: {
        type: String , 
        require: true
    },
    college:{
        type: String , 
        require: true
    }, 
    stream:{
        type: String , 
        require: true
    }, 
    grad:{
        type: Number , 
        require: true
    }, 

    date:{
type: Date ,
default : Date.now
    }
   
    
})

userSchema.pre('save' , async function(next)  {
   
   if(this.isModified('password')){
 this.password = await bcrypt.hash(this.password , 12)
 
   }
   next()
 
 })
const User = mongoose.model('HUNT' , userSchema )
module.exports = User
