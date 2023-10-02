import mongoose, { mongo } from "mongoose";

const WorkSpaceSchema = new mongoose.Schema({

    title: String, // Title for the nested array
    createdAt: Date, // Creation timestamp for the nested array
    userId: mongoose.Types.ObjectId, // User ID of the creator
    ref: "User",
    links: [
        {
            linkId: mongoose.Types.ObjectId,
            ref: "Link",
            linkAddress: String,
            require: true
        }
    ]
}, {
    timestamps: true
})

const WorkSpace = mongoose.model("workspace", WorkSpaceSchema);
export default WorkSpace