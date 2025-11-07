const http = require("http");
const port = 3000;
const hostname = '127.0.0.1'

// http.createServer((req, res)=>{

//     res.end("Hello. I am Your Server.");

// }).listen(3000);

const myserver = http.createServer((req,res)=>{
    res.end("<h1>Hello Rahat</h1>");
});

myserver.listen(port,hostname, ()=>{
    console.log(`Server is Running Successfully at http://${hostname}:${port}`);
});