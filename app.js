const express = require('express');
const app = express(); // this is the instance of express, inside that we have get, post, delete, put, patch

//import bodyPraser
const bodyParser = require('body-parser'); // we need to use it as a middleWare

const uploadRout = require("./routs/upload");

app.use(bodyParser.json());

// we use use() as a middleware for incoming request
app.use("/upload", uploadRout);

//inside the get method we have to pass the 2 parameter that is rout(/) & call back function and 
//call back function has two parameter (request and response). 
// app.get("/", (req, res) => {
//     res.send("hello");
// });

module.exports = app;