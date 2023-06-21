
const express = require('express');
const axios = require('axios');
const posts = express.Router();
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

module.exports = posts