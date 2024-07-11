const express = require("express");
const cors = require("cors");
const User = require("../models/userschema.js");
// import jwt from 'jsonwebtoken';
// import fetchuser from '../Middleware/fetchuser.js'



const app=express()
app.use(cors());
const router=express.Router()
 const JWT_SECRET='DhritiisAgoodgirl'
let aff=''
let loginuser
let loginuserID


router.post('/login',async(req,res)=>{
try{
  if(!req.body.username|| !req.body.password)
    {
      return res.json({ success: false, error: "Fill both fields" }); 
    }
     loginuser= await User.findOne({username:req.body.username,password: req.body.password});
    if(!loginuser)
    {
      return res.json({ success: false, error: "Wrong Combination" });
    }
    loginuserID = loginuser._id;
    const data={
      loginuser:{
        id: loginuser.id,
        // Affilated_to:loginuser.Affilated_to
       }
     } 
      
    //  const accesstoken=jwt.sign(data,JWT_SECRET)
    
    return res.json({ success: true, message: "Logged in"});
    

}
catch(error)
{
  console.log(error)
}
})

//jwt token
// router.get("/",fetchuser,async(req,res)=>
// {
//   return res.json({ success: true,chapter: aff});
// })
// Route to get the logged-in user's ID
router.get('/getUserId', (req, res) => {
  return res.json({ success: true, userId: loginuserID });
});

module.exports = { router, getLoggedInUserId: () => loginuserID };
