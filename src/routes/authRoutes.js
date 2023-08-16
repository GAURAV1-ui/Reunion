const express = require("express");
const authRouter = express();

authRouter.post("/authentication",(req, res) => {
    res.status(200).send("signin");
});

module.exports = authRouter;