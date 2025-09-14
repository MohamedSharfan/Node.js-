const express = require('express');
const bodyParser = require('body-parser');
require('./index');
const User = require('./userModule');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.post('/users', async(req,res)=>{
    try{
        const { name, email, age } = req.body;
        const user = new User({ name,email,age });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    }catch(e){
        res.status(400).json({error : e.message});
    }
})

app.get('/users', async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

app.get('/users/:id', async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error:"user not found"});
        res.json(user);
    } catch (err) {
        res.status(500).json({error:err.message})
    }
})


app.put('/users/:id', async(req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true, runValidators:true }
        );
        if(!updatedUser) return res.status(404).json({error:'user not found'});
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
})


app.delete('/users/:id', async (req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({error:'user not found'});
        res.json({ message: 'User deleted successfully', deletedUser });
    } catch (e) {
        res.status(500).json({error:e.message});
    }
})



app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
    
})










// const express = require('express');
// const app = express();
// app.use(express.json());

// const users = [
//     {"id": 1, "name": "Sharfan"},
//     {"id":2, "name":"arkam"}
// ]


// app.get('/users',(req,res)=>{
//     res.json(users);
// });

// app.post('/users', (req,res)=>{
//     const user = {id:users.length+1, name: req.body.name };
//     users.push(user);
//     res.status(201).json(user);
// });

// app.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000/users")
// });











// import http from 'http';
// import chalk from 'chalk';


// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.end(chalk.red('Sharfan With Color!'));
// });

// server.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000");
// })



// const http = require('http');

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end("<h1>Hello Node</h1>");
// });

// server.listen(3000,()=>{
//     console.log("server run on http://localhost:3000");
// });







// const fs = require('fs');

// fs.writeFileSync('notes.txt','hello world');

// const data = fs.readFileSync('notes.txt','UTF-8');
// console.log(data); 




// const fs = require('fs');
// const { title } = require('process');
// const command = process.argv[2];

// const indexTitle = process.argv.indexOf('--title');
// const indexBody = process.argv.indexOf('--body');

// const loadData= ()=>{
//     try{
//         const data = fs.readFileSync('notes.json');
//         const dataJson = data.toString();
//         return JSON.parse(dataJson);
//     }
//     catch(e){
//         return [];
//     }
// }

// if(command === 'list'){
//     const notes = loadData();
//     console.log(notes);
// }
// else if(command === 'add'){
//     console.log("user need to add");
//     const titleText = indexTitle!==-1?process.argv[indexTitle + 1]: '';
//     const bodyText = indexBody!==-1?process.argv[indexBody + 1]: '';

//     const notes = loadData();
//     notes.push({title:titleText, body:bodyText});
//     fs.writeFileSync("notes.json",JSON.stringify(notes,null,2));    
// }
