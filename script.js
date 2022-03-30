const express = require("express");
const app = express();
const port = 8000;

//use express router.
app.use("/", require("./routes/script-1"));                            //here "/" is any URL which will be entered in routes folder/indx.js file in future.then we need to replace that slash*(/) with same url which was present in index.js within routes folder.

//set up the view engine.
app.set("view engine","ejs");
app.set("views", "./views");

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);         //here we can use normal console.log, BUT this is anothermehod of printing msg which is called interpollation $ calculate the enter data within {} and `` this sign is called backtick present on left side of digit 1.
    }
        console.log(`Server is running on port: ${port}`);
});