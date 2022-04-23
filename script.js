const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");                         //for mongoose setup
const Todo = require("./models/Todo");                    //for creating Schema under mongoose.

//use express router.
// app.use("/", require("./Routes/script-1"));                            //here "/" is any URL which will be entered in routes folder/indx.js file in future.then we need to replace that slash*(/) with same url which was present in index.js within routes folder.

//set up the view engine.
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded());    
app.use(express.static("asset"));    


// =================================================================================================================================================================================================

app.get('/',function(req,res){
  
    Todo.find({}, function(err, todos){                      //2- fetching contact data and displaying from db. 
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
            return res.render("home",{ 
            title:        "TODO APP",                                     //(ExpressJs)server is rendering through EJS file.
            todos:  todos                                        //todos - it is a form of communication between your browser and server.
    });
  });                                  
});


// ============================================================================================================================================================================================================

app.post("/create-todo",function(req, res){
    
    Todo.create({                                 //1- Adding contact entered data into Database(Mongodb), you can see it on terminal as well as on Robo 3T. remember one thinh when you enter data on browser it will not showing there for this line of code.
        Description: req.body.Description,
        Category:    req.body.Category,
        Time:        req.body.Time
    }, function(err, newTodo){
        if(err){
            console.log("error in creating todo list");
            return;
        }
        console.log("*******" , newTodo);                       //Printing entred data into database.
        return res.redirect("back");
    });
});


// ==============================================================================================================================================================================================================================


app.get("/delete-contact",function(req,res){
    let id = req.query.id;                                                        //use query or param both works same. here we are using id for deleting a perticular contact.

    // 3- find the contact in the database using id delete.
    
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleting an object from database");
            return;
        }
        return res.redirect("back");
    });
   
})
         
// ================================================================================================================================================================================================================
 
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);         //here we can use normal console.log, BUT this is anothermehod of printing msg which is called interpollation $ calculate the enter data within {} and `` this sign is called backtick present on left side of digit 1.
    }
        console.log(`Server is running on port: ${port}`);
});