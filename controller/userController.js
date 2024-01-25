const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const signInUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await models.User.findOne({
            where: {email}
        });
        console.log(user);
        if(!user){
            return res.status(400).json("email not found!");
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        
        if(!passwordValid){
            return res.status(400).json("Incorrect email and password!");
        }

        const token = jwt.sign({id: user.id}, "mukesh", {
            expiresIn: 20
        });

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
        });

    } catch(err){
        console.log(err)
        return res.status(500).send("Sign in error");
    }
}


module.exports = {
    registerUser: registerUser,
    signInUser: signInUser
}