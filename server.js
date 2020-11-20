//javascript file that will be run by node

console.log("node is running");

// first we have to tell the server how to send files to the client
// moreover we have to emulate a server on our computer -> we create a virtual server, a local host

//we add some instructions using express

//we load express and we save it in a variable -> to create a local virtual server
let express = require("express");
//we load also socket -> to let the info exchange bewteen client and sever
let socket = require("socket.io");

// we activate the module by activating it
let app = express();

let port = 3000;

let server = app.listen(port);

// the past four lines are used to create a local server:
//without further lines we get an error due to the fact the server is not sending any file to the client

//we are saying to express
app.use(express.static("public"));

//we want to send p5 to our client, a sketch and index... everything did by the p5 toggle bar
//we want to create a socket that allows info exchange

// we create input/output variable
let io = socket(server);

io.on("connection", newConnection);

//this function is executed each time a new Connection is created
function newConnection(socket){
  console.log("new connection: " + socket.client.id); 
}
