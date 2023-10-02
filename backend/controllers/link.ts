import { Request, Response } from "express";
import Folder from "../models/Folder";
import User from "../models/User";
import Link from "../models/Link";
import mongoose from "mongoose";


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

        if (!linkId) return res.json({ message: "No Link" })
        const { folderId } = req.params;

        const links = await Link.findById(linkId);
        if (!links) return res.json({ message: "No Link" })

        const result = await Folder.updateOne(
            { _id: folderId },
            { $push: { links: { linkId: linkId, linkAddress: links.link } } }
        );

        return res.json({ message: "Link added to folder succesfully ", result })

        // const UpdateFolder = await Folder.findById(folderId);
        // console.log(UpdateFolder)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}
export async function removeLinkFromFolder(req: Request, res: Response) {
    try {
        const linkId = req.header("linkId");
        console.log(linkId)
        if (!linkId) return res.json({ message: "No Link" })
        const { folderId } = req.params;

        const links = await Link.findById(linkId);
        if (!links) return res.json({ message: "No Link" })

        const result = await Folder.updateOne(
            { _id: folderId },
            { $pull: { links: { linkId } } }
        );

        return res.json({ message: "Link removed from folder succesfully ", result })

        // const UpdateFolder = await Folder.findById(folderId);
        // console.log(UpdateFolder)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}