import { Request, Response } from "express";
import User from "../models/User";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.SECRET_KEY;

export async function register(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        const findUser = await User.findOne({ email });
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
        await newUser.save();

        const token = jwt.sign({ email: newUser.email }, jwtsecret);

        res.status(203).json({ message: "LogIn Created Successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" })
    }

}

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Login using correct credentials" });
            }

            const token = jwt.sign({ email: user.email }, jwtsecret);

            return res.status(203).json({ message: "Logged In Successfully", token });
        } else {
            return res.status(403).json({ message: "No such User exists" });
        }

    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function userDetails(req: Request, res: Response) {
    try {
        const userEmail = req.headers["userEmail"];
        console.log("emails", userEmail)
        const userDetail = await User.findOne({ email: userEmail });

        if (!userDetail) return res.status(202).json({ message: "User not found" })

        return res.status(202).json(userDetail)
    } catch (error) {
        res.status(500).json({ message: "no new " });
    }
}