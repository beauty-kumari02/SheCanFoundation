const mongoose=require("mongoose");

const leaderSchema=new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    donation:Number,
});

const leader=mongoose.model("leader",leaderSchema);

module.exports=leader;