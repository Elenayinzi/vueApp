import mongoose from 'mongoose'
const Schema = mongoose.Schema
<<<<<<< HEAD
const UserSchema=new Schema({
  username:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
})

export default mongoose.model('User',UserSchema)
=======
const UserSchema = new Schema({
    username:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

export default mongoose.model('User',UserSchema)
>>>>>>> d7c14dbbdf6be22a18e45e938bf814458e27ddbf
