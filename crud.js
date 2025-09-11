const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    {id:1, name:"sharfan", grade:12},
    {id:2, name:"arkam", grade:11},
    {id:3, name:"akmal", grade:13},
];


app.get('/students',(req,res)=>{
    res.json(students);
});


app.get('/students/:id',(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student){
        res.json(student);
    }
    else{
        res.status(404).json({message:"student not found"});
    }
})
