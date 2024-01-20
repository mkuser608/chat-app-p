const http = require('http');
const app = require('./app'); // import app.js 

const port = 3000;

//use createServer() to createServer which is present in http instance and 
//we need to pass here express application which is created in the app.js
const server = http.createServer(app);

server.listen(port);