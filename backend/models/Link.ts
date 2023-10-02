import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true
        },
        authorId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Link = mongoose.model("links", LinkSchema);
export default Link