const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);           //here we can use normal console.log, BUT this is anothermehod of printing msg which is called interpollation $ calculate the enter data within {} and `` this sign is called backtick present on left side of digit 1.
    }
        console.log(`Server is running on port: ${port}`);
});