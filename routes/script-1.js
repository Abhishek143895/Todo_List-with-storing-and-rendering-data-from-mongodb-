// ==================================================== this is a router file ======================================================================================================================

const express = require("express");

const router = express.Router();                        //express ko router naam ke variable me daal rahe hai.  hten router creat kar rahe hai.
const homeController = require("../controllars/home");   //controllar ko emport kia ja raha hai. .. ka use parent folder me jane ke lie hua hai.


console.log("Router is linked with script file home.js");

router.get("/",homeController.home);                       //homeController naam ke variable me home naam ka controllar js file add kia ja raha hai. 
router.use("/script-2", require("./script-2"));                //yaha par script-1(router) ko bola ja raha hai ki further script-2 vale router me aai controllar ki request yahi se handle ki jaye. ya use ki jaye.

//for any furter routes, access from here.
//routes.use("/routerName",require("./routerfile"));

module.exports = router;                              