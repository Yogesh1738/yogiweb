const mongoose=require("mongoose");
//connection creation and creatin a new db
mongoose.connect("mongodb+srv://ashman_jagdev:ashmanraju@cluster0.n8apx.mongodb.net/BlogsDB",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("connection successful...."))
.catch((err)=>console.log(err));
