import express, { Request, Response } from "express";
import cors from "cors";
import { connectToMongo } from "./db";
import dotenv from "dotenv";


const app = express();
dotenv.config()
app.use(express.json());
connectToMongo();

app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World New!")
})


const port=3550;
app.listen(port, () => {
    console.log(
        `server running on port ${port}`
    )
})