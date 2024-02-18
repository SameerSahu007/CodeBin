import express, { Express, Request, Response } from "express";
import router from "./routes/router";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
const mongodb_uri:string = process.env.MONGODB_URI!

mongoose.connect(mongodb_uri, {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors())
app.use(express.json());
app.use('/api', router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


