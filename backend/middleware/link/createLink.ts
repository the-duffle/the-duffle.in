import { NextFunction, Request, Response } from "express";
import Link from "../../models/Link";
import User from "../../models/User";
import { error } from "console";

export async function createLink(req: Request, res: Response, next: NextFunction) {

    try {
        const { link } = req.body;
        const userEmail = req.headers["userEmail"];
        const userD = await User.findOne({ email: userEmail })

        if (userD) {
            const newLink = new Link(
                {
                    link,
                    authorId: userD._id
                }
            )

            await newLink.save();
            (req.headers as any)["linkId"] = newLink._id;
            next();
        } else {
            throw error
        }

    } catch (error) {
        return res.status(202).json({ message: error })
    }
}