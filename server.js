//javascript file that will be run by node

console.log("node is running");

// first we have to tell the server how to send files to the client
// moreover we have to emulate a server on our computer -> we create a virtual server, a local host

//we add some instructions using express

//we load express and we save it in a variable
let express = require("express");

// we activate the module by activating it
let app = express();

let port = 3000;

let server = app.listen(port);

// the past four lines are used to create a local server:
//without further lines we get an error due to the fact the server is not sending any file to the client

//we are saying to express
app.use(express.static("public"));

//we want to send p5 to our client, a sketch and index
