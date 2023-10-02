import express, { Request, Response } from "express";
import cors from "cors";
import { connectToMongo } from "./db";
import dotenv from "dotenv";

import authRoutes from "./routes/auth"
import linkRoutes from "./routes/link"

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