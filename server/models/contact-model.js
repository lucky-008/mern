const {Schema,model,default:mongoose}= require("mongoose");
const { type, required } = require("../validators/auth-validator");
const { email } = require("zod");
const contactSchema= new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
})

const Contact= new model('Contact',contactSchema);
module.exports = Contact;