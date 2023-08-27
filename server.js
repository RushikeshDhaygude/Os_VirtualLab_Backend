import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import cors from "cors";
import addContent from "./routes/assignmentRoutes.js";

//rest object
const app = express();

//config env
dotenv.config();


//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/assignment', addContent);
app.use('/uploads', express.static('uploads'));

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Runnnig on ${process.env.DEV_MODE} mode on ${PORT}`
  ); 
});
