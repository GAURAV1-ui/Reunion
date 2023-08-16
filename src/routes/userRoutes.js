const express = require("express");
const userRouter = express();

userRouter.post("/follow",(req, res) => {
    res.status(200).send("follow");
});

module.exports = userRouter;