// Before all initialize a server with the commande npm init.
// Indicate the name of file server which we will create in the ligne terminal "entry point". ex : server.js for this project
// Then create this file and add function which will receive and treat requests
// Run server with command node server, or nodemon server (see more info behind)

// in this project we will use a framework Express to create our API server. Server can be coded in native node but it implicate
// to treat ùmanually each type of request. Express will facilitate that.
// To install Express use command "npm install express --save"

import { createServer } from "http";
import { app } from "./app.js";

// Native package http of node (replace the CommonJs method which use 'require'. You must specific that you use ES module
// in the package json file by adding "type" : "module",

// Each time a request will be sent to server, this is the function which will be executed :
// const server = createServer((req, res) => {
// req = request server
// res = response server
// res.end("Voila la réponse du serveur");
// Method end is the method which display a message when the response has been finished.
// this message will be displayed in answer of the request
// });

// Normalize port, (if is string or number)
const normalizePort = (value) => {
  const port = parseInt(value, 10);

  if (isNaN(port)) {
    return value;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "3000");

// This is for Express, to indicate for the module app, which port will be used
app.set("port", port);

// Errors management
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Create server
const server = createServer(app);

// Handling
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

// Listen the request which will be sent to server by a port.
// If request is sent by a specific port, use "process.env.PORT", else, by default, choose request Port 3000 (convention)
server.listen(port);

// Launch server with terminal command "node server" (ctrl C to close server)
// note : each time you change the response server, you have to reload server in terminal with the command "node server"
// We can install tool nodemon to not have to reload each time the server (command : npm install -g nodemon)
// After installation, instead of use "node server" use command "nodemon server". This will update in real time each changement
// in server
