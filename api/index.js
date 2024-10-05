import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connection to MongoDB successful."))
    .catch(error => console.log('Error in DB connection', error));

const app = express()
const PORT = process.env.PORT  || 3001;

// API Middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`));