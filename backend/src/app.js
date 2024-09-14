const express=require('express');
const path=require('path');
const axios=require('axios');
const mongoose=require('mongoose');
//userinfo router:
const cors=require('cors');
const routerUserInfo=require('./userinfo/userinfo');
const app=express();
app.use(cors(
    {
        origin: 'http://localhost:5173', // Allowed origin
        methods: ['GET', 'POST'],        // Allowed methods
        allowedHeaders: ['Content-Type'] // Allowed headers
    }
));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routerUserInfo);

app.listen(5137,(err)=>{
    if(err){
        console.log(err);
    }else(
        console.log('running on port 5137')
    )
})

