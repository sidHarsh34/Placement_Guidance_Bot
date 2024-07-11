
const express = require('express');
const router = express.Router();
const Userdata = require("../models/userschema")


router.post(
    "/adduserdata",
    async (req, res) => {
        const{username, password}=req.body

try{
        const data= new Userdata({
        username, password
     })
     await data.save()
    
     return res.status(200).send("Data added successfully")
 }
   catch(error)
   {
    console.log(error)
    return res.status(500).send("internal server error occured")
   }
    }
);

module.exports = router;