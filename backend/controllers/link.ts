import { Request, Response } from "express";
import Folder from "../models/Folder";


export async function createFolder(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const userId = req.headers["userId"];
        if (!title) return res.status(202).json({ message: "Enter title Please" })

        const existingFolder = await Folder.findOne({ title, userId })
        if (existingFolder) return res.status(202).json({ message: "A folder with the same title already exists" })

        const newFolder = new Folder({
            title,
            userId,
            links: [],
        });

        await newFolder.save();

        res.status(201).json({ message: 'Folder created successfully' });

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}