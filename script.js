const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));  

app.use(function(req, res, next){
    console.log("middleware chala");
    next();
});

app.get("/", function(req, res){
    res.send("champion ho tum  mere bhai");

});
app.get("/profile", function(req, res){
    res.send("all good mere bhai");

});
app.get("/about", function(req, res, next){
    return next(new Error ('somthing went wrong...'));

});

app.use((err, req, res, next)=>{
    console.error(err.stack)
    res.status(500).send('nahi pata hai mujhe Somethiing went wrong no idea');
})
app.listen(3005);