//var http = require("http");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./src/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running again");
});

// //create a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
