// const express = require("express");
// const router = express.Router();
// const QueAns = require("../models/QueAns")

// router.post(
//     "/adddata",
//     async(req, res) => {
//         try{
            
//             let data = await QueAns.create({
//                 Identifier : req.body.Identifier,
//                 Answer : req.body.Answer,
//             }) 
//         }
//         catch(error){
//             console.error(error.message);
//         }
//     }
// )

const express = require('express');
const router = express.Router();
const QueAns = require("../models/QueAns")


router.post(
    "/adddata",
    async (req, res) => {
        // try {
        //     let data = await QueAns.create({
        //         Identifier: req.body.Identifier,
        //         Answer: req.body.Answer,
        //     });
        //     //res.status(200).json(data); // Assuming you want to send some response back
        //     res.status(200).send("data added successfully ")
        // } catch (error) {
        //     console.log(error.message);
        //     res.status(500).send('Server Error'); // Sending a generic server error response
        // }
        const{Identifier, Answer}=req.body

try{
        const data= new QueAns({
        Identifier, Answer
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
