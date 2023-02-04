
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

 
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  try {
    const clientToken = req.headers.authorization;
    const decoded = jwt.verify(clientToken, SECRET_KEY);
    if (decoded) {
      res.decoded = decoded
      next()
    } else {
      res.status(401).json({ error: "Login failed. Please try again." });
    }
  } catch (err) {
    res.status(419).json({ error: 'Session is expired. Please Login again.' });
  }
};


export { verifyToken };




