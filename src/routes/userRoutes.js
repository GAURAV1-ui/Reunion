import express  from "express";
const userRouter = express();

userRouter.post("/follow",(req, res) => {
    res.status(200).send("follow");
});

export default userRouter;