const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        let token = req.header("Authorization");
        if (typeof token === "string") {
            if (token.startsWith("Bearer ")) token = token.split(" ")[1];

            const verified = jwt.verify(token, process.env.SECRET_KEY);
            req.headers["userId"] = verified.id;
            next();
        } else {
            res.status(202).json({ mesasage: "Acess Denied" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
console.log("working");
