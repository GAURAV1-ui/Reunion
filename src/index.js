const express = require("express");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use("/api", authRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(5000, ()=> {
    console.log("Server start at port: 5000");
});