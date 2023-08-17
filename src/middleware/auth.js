import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Authorization token missing' });
    }
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      req.user = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
  