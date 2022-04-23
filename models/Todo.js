// ===================================================================Schema===================================================================================================
const mongoose =  require("mongoose");
const TodoSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Time: {
        type: Date,
        required: true
    },

});

const Todo = mongoose.model("Todo",TodoSchema);
module.exports = Todo;

console.log("Schema is connected");



// ========================================================================================================================



// module.exports.destroy=function(req,res){

//     //get the id from query
//     var id=req.query;
  
//     //checking the number of task to delete
//     var count=Object.keys(id).length;
//     for(let i=0;i<count;i++){

//         //finding and deleting the task from the DB one by one by id
//         List.findByIdAndDelete(Object.keys(id)[i],function(err){
//             if(err){
//                 console.log("Error in deleting task");
//             }

//         })
//     }
//     return res.redirect('back');
// }