require('dotenv').config();
const express = require('express');
const axios = require('axios');
const posts = express.Router();
const API_KEY = process.env.API_KEY

posts.use(express.json());


posts.get("/posts", async(req, res) => {
    const {limit, offset} = req.query
    try {
        const posts = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${offset}`)
        
        return res.status(200).json(posts.data)
    } catch (error) {
        return res.status(400).json({"error": error})
    }
})
posts.get("/picofday", async(req, res) => {
    try {
        const pic = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        return res.status(200).json(pic.data)
    } catch (error) {
        return res.status(400).json({error})
    }
})
module.exports = posts