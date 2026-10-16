const express = require("express");
const user = require("../model/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const  dotenv = require("dotenv");
dotenv.config();
const app = express();

const first = async (req, res) => {
  try {
    const userinfo = await user.findById(req.userdetail.userdetail).select("-password");
    if(!userinfo){
      return res.status(401).json({message:"not get user"})
    }
    return res.status(200).json({message:"user profile get" , user : userinfo});
    
  } catch (error) {
    res.status(401).json({message:"error when get profile", error : error})
  }
};

const createUser = async(req,res) => {
  const { name, email, password } = req.body;
  try {
    const userdetail = await user.findOne({email});
    if(userdetail){
      res.status(401).json("user pehle se hai");
    }
    if (!userdetail){
      const newUser = await user.create({
        name,
        email,
        password : bcrypt.hashSync(password, 10),
      });
      res.status(200).json("user Created " + newUser)
    }    
  } catch (error) {
    res.status(404).json(error + "user not created")    
  }   
}

const userLogin = async(req, res) => {
  const {email , password } = req.body;
  try {
    const userdetail = await user.findOne({email});
    if(!userdetail){
      return res.status(401).json({ message: "Invalid email or password" });
    };
    const verifypassword = bcrypt.compareSync(password , userdetail.password);
    if(!verifypassword){
     return res.status(401).json({ message: "Invalid password" });
    };
    const token = jwt.sign({userdetail : userdetail._id}, process.env.JWT_Secret_Key, {expiresIn : "1d" })
    return res.status(200).json({ message : "User Login",   token : token});
  } catch (error) {
     res.status(404).json(error + "user not login")    
  }
}

module.exports = {first , createUser , userLogin};