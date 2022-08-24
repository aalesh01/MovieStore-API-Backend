const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    age:Number,
    email:String
},
{
  timestamps:true  
})

const user = mongoose.model('User',userSchema)


module.exports = user;


