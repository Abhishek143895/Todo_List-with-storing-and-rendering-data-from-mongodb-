// =====================================================================Mongoose setup=======================================================================================

// require the librery
const mongoose = require("mongoose");

// connect to the database.(mongodb)
mongoose.connect("mongodb://localhost/mynew");               //Yha par mynew (variable) ki help se robo 3t par resule show kara rahe hai.next file me jaruri nahi hai ki same naam dala jae.

// acquire the connection(to check if it is successful)
const db = mongoose.connection;

// error
db.on("error",console.error.bind(console,"error connecting to db"));

// up and running then print the message.
db.once("open",function(){
    console.log("Successfully connected to the database")
});