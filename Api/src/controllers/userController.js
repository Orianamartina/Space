const {User} = require("../db")
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');
const jwt = require ('jsonwebtoken')
const {TOKEN_KEY} = process.env

module.exports = {

    registerUser: async(req, res) => {
        try {
            const {name, lastname, username, email, password} = req.body;

            if (!name || !lastname || !username || !email || !password){
                return res.json({
                    success: false,
                    "Message": "All fields are required"
                })
            }

            const user = await User.findOne({
                where:{
                    [Op.or]: [{ username }, { email }]
                }
            })
            if (user){
                return res.status(400).json({
                    success: false,
                    "message": "Username or email already exists"
                })
            }else{
               
                let passwordHashed = await bcrypt.hash(password, 10);
                const newUser = await User.create({
                    name, lastname, username, email, password: passwordHashed
                })
               
                
                return res.status(201).json(newUser)
            }
        } catch (error) {
            return res.status(400)
        }   
    },

    logInUser: async (req, res) => {
        const {username, password} = req.body

        if (!username || !password){
            return res.status(400).json(
                {
                    "success": false,
                    "message": "All fields are required"
                }
            )
        }
        let user = await User.findOne({
            where:{
                username
            } 
        })
        if (!user){
            return res.status(400).json({
                "success": false,
                "message": "User not found"
            })
        }
        if (user.disabledAccount){
            return res.status(400).json({
                "success": false,
                "message": "Account currently disabled"
            })
        }else{
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch){
                const token = jwt.sign(
                    {id : user.id,
                    username,
                    exp: Date.now() + 60 * 1000},
                    TOKEN_KEY
                    )
                return res.status(200).json({token, user})
            }
            else{
                return res.status(400).json({message: "incorrect password"})
            }
            
        }

    },

    createPost: async(req, res) =>{
        jwt.verify(req.token, TOKEN_KEY, (error, authData) => {
            if (error){
                res.sendStatus(403);
            }
            else{
                res.json({
                    "mensaje": "Post creado",
                    authData
                })
            }
        })
    }
}