const models = require("../models");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) =>{
    try{
        const {name, email, password} = req.body;

        const ExistUser = await models.User.findOne({
            where: {email}
        });
        if(ExistUser){
            return res.status(400).send("User already existed with this email");
        }

        await models.User.create({
            name,
            email,
            password: await bcrypt.hash(password, 15),
        });
        return res.status(200).send("Registered Successfully!");
    }catch(error){
        return res.status(400).send("Registration failed!");
    }
}

module.exports = {
    registerUser: registerUser
}