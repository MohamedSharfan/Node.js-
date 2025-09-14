const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

let students = [
    {id:1, name:"sharfan", grade:12},
    {id:2, name:"arkam", grade:11},
    {id:3, name:"akmal", grade:13},
];


app.get('/students',(req,res)=>{
    res.json(students);
})

app.get('/students/:id',(req,res)=>{
    const student = students.find(s => s.id == parseInt(req.params.id));
    if (student){
        res.json(student);
    }
    else{
        res.status(404).json({message:"student not found"});
    }
})

app.post('/students',(req,res)=>{
    const newStudent = 
        {id: students.length+1,
        name: req.body.name,
        grade: req.body.grade
        };
    students.push(newStudent);
    res.send(`<h2>Successfully added new student</h2>
              <p>name : ${newStudent.name}</p>  
              <p>grade : ${newStudent.grade}</p>  
              <p>id : ${newStudent.id}</p>
              <a href="/form.html">Add another user</a>  
            `);
});

app.put('/students/:id',(req,res)=>{
    const student = students.find(s => s.id === parseInt(req.params.id));
    if(student){
        student.name = req.body.name || student.name;
        student.grade = req.body.grade || student.grade;
        res.json(student);
    }
    else{
        res.status(404).json({message:"student not found"});
    }
});

app.delete('/students/:id',(req,res)=>{
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if(index !== -1){
        const deleteStudent = students.splice(index,1);
        res.json(deleteStudent[0]);
    }
    else{
        res.status(404).json({message:"user is not found"});
    }
})



app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
})
