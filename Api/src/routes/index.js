const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const express = require('express');
const router = Router();
const posts = require("./postsRoutes")

posts.use(express.json());

router.use("/", posts)

module.exports = router;