
//web server
/*const http = require("http");

const server = http.createServer((req, res) => {
  const Myhtml = `<h1>Hello Nodejs eiei555</h1>`;
  res.write(Myhtml);
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("start server in port 3000");
});*/


//Express
const express = require('express') 
const app = express()

app.use((req,res)=>{
  res.send("Hello Express.js")
})

app.listen(8080,()=>{
    console.log("Run server port8080")
})
