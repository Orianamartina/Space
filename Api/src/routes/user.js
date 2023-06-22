const express = require('express');
const axios = require('axios');
const user = express.Router();
user.use(express.json());
const {registerUser} = require('../controllers/userController')

user.post("/register", registerUser)

module.exports = user