import { Request, Response } from "express";
import Folder from "../models/Folder";
import User from "../models/User";

export async function createFolder(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const userEmail = req.headers["userEmail"];
        if (!title) return res.status(202).json({ message: "Enter title Please" })

        const user = await User.findOne({ email: userEmail })

        if (user) {
            console.log("user", user)

            const existingFolder = await Folder.findOne({ title })
            if (existingFolder) return res.status(202).json({ message: "A folder with the same title already exists" })

            const newFolder = new Folder({
                title,
                userId: user._id,
                links: [],
            });

            await newFolder.save();

            res.status(201).json({ message: 'Folder created successfully' });
        } else {
            return res.status(202).json({ message: "User doesnt exists" })
        }

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export async function addLinkToFolder(req: Request, res: Response) {
    try {
        const linkId = req.headers["linkId"];
        const { folderId } = req.params;



        // const UpdateFolder = await Folder.findById(folderId);
        // console.log(UpdateFolder)
    } catch (error) {
        return res.status(202).json({ message: error })
    }
}