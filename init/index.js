const mongoose=require("mongoose");
const data=require("./data.js");

const MONGO_URI="mongodb+srv://<username>:<Password>@user.vifow5w.mongodb.net/?retryWrites=true&w=majority&appName=User";

main().then((res)=>{
    console.log("connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);

}


const leaderSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    donation:Number,
});

const leader=mongoose.model("leader",leaderSchema);

const datainiitialize=async()=>{
    await leader.deleteMany({});
    const result=await leader.insertMany(data.data);
    console.log(result);
}

datainiitialize();
