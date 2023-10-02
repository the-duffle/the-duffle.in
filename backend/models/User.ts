import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requred: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 7,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        country: {
            type: String,
            default: "anonymous"
        },
        links: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Link",
            },
        ],
        folders: [
            {
                type: mongoose.Types.ObjectId,
                title: String,
                ref: "Folder"
            }
        ],
        workSpaces: [
            {
                type: mongoose.Types.ObjectId,
                ref: "WorkSpace",
            },
        ],
        favourites: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Link",
            },
        ],
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("user", UserSchema);
export default User
