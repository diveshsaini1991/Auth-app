const usermodle = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await usermodle.findOne({email});
        if(user){
            return res.status(409)
                .json({
                    message:"user already exist, Try login",
                    success:false
                })
        }
        const userModle = new usermodle({name,email,password});
        userModle.password = await bcrypt.hash(password,10);
        await userModle.save();
        res.status(201)
            .json({
                message:"Signup Successfull",
                success:true
            })
        
    } catch (err) {
        res.status(500)
            .json({
                message:"Internal server error"+err,
                success:false
            })
    }
}


const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        const user = await usermodle.findOne({email});
        const errmsg="Auth Failed email or password is incorrect";
        if(!user){
            return res.status(403)
                .json({
                    message:errmsg,
                    success:false
                })
        }

        const ispassequal = await bcrypt.compare(password,user.password);
        if(!ispassequal){
            return res.status(403)
            .json({
                message:errmsg,
                success:false
            })
        }

        const jwtToken = jwt.sign(
            {email: user.email , _id: user._id},
            process.env.JWT_SECRET,
            { expiresIn:"24h"}
        )

        res.status(200)
            .json({
                message:"login Success",
                success:true,
                jwtToken,
                email,
                name: user.name
            })
        
    } catch (err) {
        res.status(500)
            .json({
                message:"Internal server error"+err,
                success:false
            })
    }
}


module.exports = {
    signup,
    login
};