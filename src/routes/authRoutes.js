import express  from "express";
import { signin } from "../controllers/auth.js";

const router = express.Router();

router.post("/authentication",signin)
// (req, res) => {
//     res.status(200).send("signin");
// });

export default router;