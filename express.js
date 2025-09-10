const express = require('express');
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    res.send("Welcome to the home page!!");
});


app.get("/about",(req,res) =>{
    res.send("This is the about page");
});

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`); 
});