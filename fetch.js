//fetch api using axios
const axios = require("axios");
const { response } = require("express");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response =>{
        console.log("Promise:",response.data);
    })
    .catch(error =>{
        console.error("Error:", error);   
    });


//fetch api using async

async function fetchPost() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Success",response.data);
        
    }
    catch(e){
        console.error("Error:",e);
        
    }
}

fetchPost();