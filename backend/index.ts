import express, { Request, Response } from "express";
import cors from "cors";
import { connectToMongo } from "./db";
import dotenv from "dotenv";

const authRoutes = require("./routes/auth");
const linkRoutes = require("./routes/link")

const app = express();
dotenv.config()
app.use(express.json());
connectToMongo();

app.use("/auth", authRoutes);
app.use("/link", linkRoutes);


const port = 3550;
app.listen(port, () => {
    console.log(
        `server running on port ${port}`
    )
})