// const fs = require('fs');

// const command = process.argv[2];
// // console.log(command);

// const titleIndex = process.argv.indexOf('--title');
// const bodyIndex = process.argv.indexOf('--body');

// const titleText = titleIndex!==-1?process.argv[titleIndex+1]:'';
// const bodyText = bodyIndex!==-1?process.argv[bodyIndex +1]:'';

// const loadData=()=>{
//     try{
//         const datas = fs.readFileSync("data.json");
//         const stringData = datas.toString();
//         const parseData = JSON.parse(stringData);
//         return parseData;
//     }
//     catch(e){
//         return[];
//     }
// }

// if(command === 'list'){
//     const datas = loadData();
//     const dataTitle = datas.map(item => item.title);
//     console.log(dataTitle);
// }
// else if(command === 'add'){
//     const datas = loadData();
//     const newDatas = {title:titleText, body:bodyText};
//     datas.push(newDatas);
//     const jsonDatas = JSON.stringify(datas);
//     fs.writeFileSync("data.json",jsonDatas);
//     console.log("Success");
// }
// else if(command === 'read'){
//     const datas = loadData();
//     // const dataTitle = datas.map(item => item.title);
//     const title = datas.find(item =>item.title === titleText);
//     console.log(title.body);   
// }
// else if(command === 'delete'){
//     const datas = loadData();
//     const newDatas = datas.filter(item => item.title !== titleText);
//     const jsonDatas = JSON.stringify(newDatas);
//     fs.writeFileSync("data.json",jsonDatas);
//     console.log("Successfully deleted");
// }










































// const { log } = require('console');
// const fs = require('fs');
// const { title } = require('process');
// const command = process.argv[2];

// const titleIndex = process.argv.indexOf("--title");
// const bodyIndex = process.argv.indexOf("--body");
// const titleText = titleIndex!==-1? process.argv[titleIndex+1]:'';
// const bodyText = bodyIndex!==-1? process.argv[bodyIndex+1]:'';

// const loadData=()=>{
//     try{
//         const data = fs.readFileSync("data.json");
//         const dataString = data.toString();
//         const parseData = JSON.parse(dataString);

//         return parseData;
//     }
//     catch(e){
//         return [];
//     }
// }
// if(command==='list'){
//     const datas = loadData();
//     const titles = datas.map(item => item.title);
//     console.log(titles);
// }
// else if(command==='add'){
//     const notes = loadData();
//     notes.push({title:titleText, body:bodyText});
//     fs.writeFileSync("data.json",JSON.stringify(notes,null,2));
//     console.log("added successfully");
// }
// else if(command==='read'){
//     const notes = loadData();
//     const note = notes.find(item=>item.title === titleText);
//     if(note){
//         console.log(note.body);
//     }
//     else{
//         console.log("No matches");
//     }
// }
// else if(command ==='delete'){
//     const notes = loadData();
//     const note = notes.find(item => item.title === titleText);
//     if (note){
//         const notes1 = notes.filter(item=>item.title !== titleText);
//         fs.writeFileSync("data.json",JSON.stringify(notes1,null,2));
//         console.log("item deleted successfully");
//     }
//     else{
//         console.log("The item is not there");
//     }
// }