const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create', async (req,res)=>{
   let createduser = await userModel.create({
        name:"pradip",
        username:"pradip76",
        email:"pradpkumar62075@gmail.com"
    })
    res.send(createduser);
})
app.listen(3000);