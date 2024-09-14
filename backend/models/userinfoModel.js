const mongoose=require('mongoose');
const main=require('./connetcmongo')
const url='mongodb://localhost:27017/userinfodatabase';
main(url).then(()=>{
    console.log('connetced');
}
).catch((err)=>{
    console.log(err);
})
const userinfoschema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String,
        enum:['male','female']
    }
});

const userinfoModel=new mongoose.model('userinfo',userinfoschema);
module.exports=userinfoModel;