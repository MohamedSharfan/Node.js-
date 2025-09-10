const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json())


app.use((req,res,next)=>{
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
})

let students =[
    {id:1, name:"Ali", course:"IT"},
    {id:2, name:"Arkam", course:"CS"},
]


app.get("/students",(req,res)=>{
    res.json(students);
})

app.post("/students",(req,res,next)=>{
    try{
        const {name, course} = req.body;
        if(!name || !course){
            throw new Error("Name and Course are required");
        }
        const student = {id:students.length+1, name:name, course:course};
        students.push(student);
        res.status(201).json(student);
    }
    catch(error){
        console.error("Error",error);   
    }
})

app.use((err,req,res,next)=>{
    console.error("Error: ",err.message);
    res.status(400).json({error:err.message});
})



app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
    
})
