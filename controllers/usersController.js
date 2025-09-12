
let users =[
    {id:1, name:'ranjith', age:54},
    {id:2, name:'ajith', age:84},
    {id:3, name:'vijay', age:64},
];



const getUser = (req,res)=>{
    const {name, age} = req.query;
    let selectedUser = users;
    if (name){
        selectedUser = selectedUser.filter(s =>s.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (age){
        selectedUser = selectedUser.filter(s =>s.age == age);
    }
    res.json(selectedUser);
};

const getUserById = (req,res) =>{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    if (user){
        res.json(user);
    }
    else{
        res.status(404).json({messege:"user not found"});
    }
};



module.exports = {getUser, getUserById};

