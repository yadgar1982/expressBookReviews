const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();
const session=require("express-session");

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid


}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {

  //Write your code here
 const data= req.body;
 const isUsername= users.find(item=>item.username==data.username);
 if(isUsername)
 {
  if(isUsername.password==data.password)
  {
    const token=jwt.sign(isUsername,"12344",{expiresIn:"1h"});
    req.session.user = {token,username:isUsername.username};
    console.log(req.session.user)
    return res.status(200).json({message: "Log in success", token});



  }
  else
  {
    return res.status(404).json({message: "wrong password"})
  }
 }
 else 
 {
  return res.status(404).json({message: "User name not found"})
 }

  
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  const isbn=req.params.isbn;
  const user=req.session.user;
  const isUser=users.find(item=>item.username==users.username)
  if(isUser)
  {
    return res.status(300).json({message: "Valid User"});
  }
  else
  {
    return res.status(401).json({message: "unathenticated user"});
  }
  
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
