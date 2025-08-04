const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const User=require("./model/user.js");
const leader=require("./model/leader.js");
const dotenv=require("dotenv");
const ejsMate = require("ejs-mate");
dotenv.config();

const port=8080;

const MONGO_URI=process.env.DATABASE_URL;

main().then((res)=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);

}

app.engine("ejs", ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.render("./landingPage.ejs");
});

app.get("/dashboard",(req,res)=>{
    res.render("./dashboard.ejs");
});

app.get("/signUp",(req,res)=>{
    res.render("./index.ejs");
});

app.get("/leadership",async(req,res)=>{
    const leaders=await leader.find({});
    res.render("./leadership.ejs",{leaders});
});


app.post("/signUp",async(req,res)=>{
    let newUser=new User(req.body.user);
    await newUser.save().then((result)=>{
        console.log(result);
        res.redirect("/dashboard");
    }).catch((err)=>{
        console.log(err);
    })
});

app.get("/donate",(req,res)=>{
    res.render("./donate.ejs");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);