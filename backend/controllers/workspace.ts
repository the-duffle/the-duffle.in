import { Request, Response } from "express";
import WorkSpace from "../models/WorkSpace";
import User from "../models/User";
import Link from "../models/Link";

export async function createWorkSpace(req: Request, res: Response) {
    try {
        const { title } = req.body;
        const userEmail = req.headers["userEmail"];
        if (!title) return res.status(202).json({ message: "Enter title Please" })

        const user = await User.findOne({ email: userEmail })

        if (user) {
            const existingWorkSpace = await WorkSpace.findOne({ title })
            if (existingWorkSpace) return res.status(202).json({ message: "A workspace with the same title already exists" })

            const newWOS = new WorkSpace({
                title,
                userId: user._id,
                links: [],
            });

            await newWOS.save();

            res.status(201).json({ message: 'Workspace created successfully' });
        } else {
            return res.status(202).json({ message: "User doesnt exists" })
        }

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export async function addLinkToWorkSpace(req: Request, res: Response) {
    try {
        const linkId = req.headers["linkId"];

        if (!linkId) return res.json({ message: "No Link" })
        const { woId } = req.params;

        const links = await Link.findById(linkId);
        if (!links) return res.json({ message: "No Link" })

        const result = await WorkSpace.updateOne(
            { _id: woId },
            { $push: { links: { linkId: linkId, linkAddress: links.link } } }
        );

        return res.json({ message: "Link added to WorkSpace succesfully ", result })

        // const UpdateWorkSpace = await WorkSpace.findById(WorkSpaceId);
        // console.log(UpdateWorkSpace)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export async function removeLinkFromWorkSpace(req: Request, res: Response) {
    try {
        const linkId = req.header("linkId");
        console.log(linkId)
        if (!linkId) return res.json({ message: "No Link" })
        const { woId } = req.params;

        const result = await WorkSpace.updateOne(
            { _id: woId },
            { $pull: { links: { linkId } } }
        );

        return res.json({ message: "Link removed from workSpace succesfully ", result })

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}