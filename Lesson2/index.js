const fs = require('fs');

// For Write File
fs.writeFile('demo1.txt',"My Name is Rahat",function(err){
    if(err){
        console.log('err');
    }
    else{
        console.log("successful");
    }
})

//Another procedure for write file
fs.writeFile('demo1.txt',"My Name is Rahat",(err) =>{
    if(err){
        console.log('err');
    }
    else{
        console.log("successful");
    }
})

//Append file
fs.appendFile('demo1.txt','I am 22 years old',(err) =>{
    if(err){
        console.log('err');
    }
    else{
        console.log("Successful");
    }
})

//Read File
fs.readFile('demo1.txt','utf-8',(err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//Rename File

fs.rename('demo1.txt','demo2.txt',(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }


})

//Delete File

fs.unlink('demo2.txt',(err)=>{
    if(err){
        console.log(err);
    }

    else{
        console.log("Successful");
    }
})
