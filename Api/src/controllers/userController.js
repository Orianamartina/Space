const {User} = require("../db")
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');

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
                const newUser = User.create({
                    name, lastname, username, email, password: passwordHashed
                })
             
                return res.status(201).json(newUser)
            }
        } catch (error) {
            return res.status(400)
        }   
    }
}