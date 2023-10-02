import mongoose from "mongoose";

const FolderSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Folder name
    userId: {
        type: mongoose.Types.ObjectId, // User ID of the folder owner
        ref: "User",
    },
    links: [
        {
            linkId: {
                type: mongoose.Types.ObjectId,
                ref: "Link",
            },
            linkAddress: {
                type: String,
                required: true
            },
        }
    ]


}, {
    timestamps: true
})

const Folder = mongoose.model("folder", FolderSchema);
export default Folder;