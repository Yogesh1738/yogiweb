const mongoose=require("mongoose");
const employeeschema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   
    phoneno:{
        type:Number,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true,
    },

    confirmpass:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
})

//to create collection

const Register=new mongoose.model("Register",employeeschema);



module.exports=Register;