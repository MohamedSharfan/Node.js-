const express = require('express');
const app = express();
const PORT = 3000;  

app.use(express.json());

let students =[
    {id:1, name:"sharfan", grade:12},
    {id:2, name:"john", grade:10},
    {id:3, name:"jane", grade:11},
];


app.get('/students',(req,res)=>{
    const {name, grade} = req.query;
    let filteredStudents = students;

    if(name){
        filteredStudents = filteredStudents.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
    }
    if(grade){
        filteredStudents = filteredStudents.filter(s =>s.grade == grade);
    }

    res.json(filteredStudents);
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})