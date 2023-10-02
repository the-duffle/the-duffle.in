import { Request, Response } from "express";

const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.SECRET_KEY;

export async function register(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        const findUser = await User.findOne({ email });
        // console.log(""findUser);
        if (findUser) {
            return res.status(401).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
        });

        const saveUser = await newUser.save();
        const token = jwt.sign({ id: saveUser._id }, jwtsecret);
        delete saveUser.password;

        res.status(203).json({ message: "LogIn Created Successfully", token });
    } catch (error) {
        res.status(500).json({ message: error })
    }

}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) res.status(403).json({ message: "No such User exists" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Login using correct credentials" });
        }

        const token = jwt.sign({ id: user._id }, jwtsecret);
        delete user.password;

        res.status(203).json({ message: "Logged In Successfully", token });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}