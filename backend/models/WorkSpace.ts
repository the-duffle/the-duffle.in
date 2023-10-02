import mongoose, { mongo } from "mongoose";

const WorkSpaceSchema = new mongoose.Schema({

    title: String, // Title for the nested array
    createdAt: Date, // Creation timestamp for the nested array
    userId: {
        type: mongoose.Types.ObjectId, // User ID of the creator
        ref: "User",
    },
    links: [
        {
            linkId: {
                type: mongoose.Types.ObjectId,
                ref: "Link"
            },
            linkAddress: String,
        }
    ]
}, {
    timestamps: true
})

const WorkSpace = mongoose.model("workspace", WorkSpaceSchema);
export default WorkSpace