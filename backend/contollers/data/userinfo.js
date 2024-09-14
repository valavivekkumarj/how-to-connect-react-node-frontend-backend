const userinfoModel = require("../../models/userinfoModel");

const userinfoform=async(req,res)=>{
    try{
res.send('userinfoform');
    }catch(err){
console.log(err);
    }
}

//user info store api:
const userinfostore=async(req,res)=>{
    try{
let data=req.body;
console.log(data);
let newdata=new userinfoModel(data);
await newdata.save();
res.send('data stored successfully.')
    }catch(err){
console.log(err)
    }
}

const userinfoshow=async(req,res)=>{
    try{
let {email}=req.query;
let data=await userinfoModel.find({'email':email});
res.json(data);
    }catch(err){
console.log(err);
    }
}

module.exports={userinfoform,userinfoshow,userinfostore};