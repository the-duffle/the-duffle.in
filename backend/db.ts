import mongoose from "mongoose";
import dotenv from "dotenv"

//config
dotenv.config();
const Mongo_URI = process.env.MONGOURL;

export async function connectToMongo() {
  if (typeof Mongo_URI === "string") {
    const result = await mongoose.connect(Mongo_URI);
    if (result) {
      console.log("Connected to DB succesfully");
    } else {
      console.log("DB pipeline connection fatal");
    }
  } else {
    console.log("DB connection_string parsing error");
  }
}
