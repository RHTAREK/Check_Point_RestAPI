const mongoose=require("mongoose");


const userSchema = new mongoose.Schema({
    firstName:{type:String,
    required:true,},
    lastName:{type:String,
    required:true},
eMail:{type:String,
required:true,
unique:true},

});
module.exports = User = mongoose.model('User', userSchema)
