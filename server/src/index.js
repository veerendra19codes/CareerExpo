//express is a framework to create our api
import express from "express";
//allows to set up rules for communication between frontend and backend
import cors from "cors";
//allow us to write query to our db(mongodb)
import mongoose from "mongoose";
//importing routes
import { userRouter } from "./routes/users.js"
// import { recipesRouter } from "./routes/recipes.js";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3001

// middleware so that whatever data is received from frontend is converted into json for backend
app.use(express.json());
app.use(cors());


//using routers
// routename,  routefile
app.use("/auth", userRouter);
// app.use("/recipes", recipesRouter);

const MONGO_URL = process.env.MONGO_URL ;

mongoose.connect(MONGO_URL);

app.listen(PORT, (req, res) => {
    console.log("server started");
});