const mongoose=require("mongoose");
//connection creation and creatin a new db
mongoose.connect("/BlogsDB",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("ccessful...."))
.catch((err)=>console.log(err));
