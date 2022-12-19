const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema2 = new mongoose.Schema({
    firname:{
        type: String , 
        require: true
    },
    lasname:{
        type: String , 
        require: true
    },
    usename:{
        type: String , 
        require: true
    },
   
    pwd: {
        type: String , 
        require: true
    },
    skills:{
        type: String , 
        require: true
    }, 
    cname:{
        type: String , 
        require: true
    }, 
    email:{
        type: String , 
        require: true
    },
    des:{
        type: String , 
        require: true
    }, 

    date:{
type: Date ,
default : Date.now
    }
   
    
})

userSchema2.pre('save' , async function(next)  {
   
    if(this.isModified('pwd')){
  this.pwd = await bcrypt.hash(this.pwd , 12)
  
    }
    next()
  
  })
 const User2 = mongoose.model('SEEKER' , userSchema2 )
 module.exports = User2
 