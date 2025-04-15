const express=require("newcommit2");
const app=express();
const path=require("newcommit2");
require("./db/conn");
const Register=require("./models/registers");

var port=process.env.PORT || 8000;
const static_path=path.join(__dirname,"../newcommit2");
const viewpath=path.join(__dirname,"../newcommit2");
const regpath=path.join(__dirname,"../newcommitd2");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",viewpath);
app.set("views",regpath)

app.listen(port,()=>{
    console.log(`server is running at the  port no ${port}`);
})

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
    res.render("register")
})

//create a new user in our database
app.post("/register",async(req,res)=>{
    try{
      const password=req.body.pass;
      const cpassword=req.body.confirmpass;
      if(password === cpassword)
      {
        const registcustomers=new Register({
            fullname:req.body.fullname,
            username:req.body.username,
            email:req.body.email,
            phoneno:req.body.phoneno,
            pass:req.body.pass,
            confirmpass:req.body.confirmpass,
            gender:req.body.gender
        })
   const registered=await registcustomers.save();
   res.status(201).render("index");
    }
      else
      {
       res.send("password are not matching");
      }   //most important
    }catch(error){
        res.status(400).send(error);
    }
})


app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async(req,res)=>{
    try{
      const emailing=req.body.emaill;  //eh oh data jehda appa login page ch bhrna
      const passwordd=req.body.passss;//eh oh data jehda appa login page ch bhrna
      const user=await Register.findOne({email:emailing});  //user appa nu registration di id dauga 
    if(user.pass === passwordd)  //left vala reg form ch data ,right vala login page 
    {
     res.status(201).render("index");
    }
    else
    {
     res.send("invalid data");
    }
    } catch(error){
        res.status(400).send("invalid data");
    }
})
