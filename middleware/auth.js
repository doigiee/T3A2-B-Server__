
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

 
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  try {
    // In header, it's "header bearer-token", so get rid of empty space and read value of [1] index
    const clientToken = req.headers.authorization.split(' ')[1];
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



