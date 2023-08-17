import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET_KEY = "REUNIONAPI";

  export const signin = async( req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email: email});

        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (passwordMatch) {
          const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    
          return res.json({ token });
        } else {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    }

