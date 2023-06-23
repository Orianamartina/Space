const express = require('express');
const axios = require('axios');
const user = express.Router();
user.use(express.json());
const {registerUser, logInUser, createPost} = require('../controllers/userController')



function verifyToken(req, res, next){
    const bearerHeader= req.headers['authorization']

    if (typeof bearerHeader != 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken;
        next()
    }else{
        res.sendStatus(403)
    }
}

user.post("/register", registerUser)
user.post("/login", logInUser)
user.post("/post", verifyToken, createPost )
module.exports = user