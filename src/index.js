import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import User from "./models/user.js";
import {users} from "./data/index.js";

const app = express();

// console.log(users);

// const authRouter = require("./routes/authRoutes");
// const userRouter = require("./routes/userRoutes");

// const mongoose = require("mongoose");

app.use(express.json());

app.use("/api", authRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.send("Hello");
});

mongoose.connect("mongodb+srv://iamGaurav_201:542155421@cluster0.7sq9r.mongodb.net/reunion")
.then(() => {
    app.listen(5000, ()=> {
        // User.insertMany(users);
        console.log("Server start at port: 5000");
    });
})
.catch ((error) => {
    console.log(error);
})
