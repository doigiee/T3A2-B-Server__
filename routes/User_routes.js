import express from 'express'
import { UserModel } from "../db.js"
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// All users list
router.get('/', async (req, res) => {
  console.log("Access to find all users");
  // res.send(await UserModel.find().populate({ path: 'users', select: 'name' }))});
  res.send(await UserModel.find())});

// Register user
router.post('/register', async (req, res) => {
  console.log("Access to register a user")
  try {
    // 1. Create a new user object with values passed in from the request
    const { email, title, firstName, lastName, phoneNumber, password } = req.body
    console.log(`User creating on process`)
    // const userObject = await UserModel.findOne({ email: email })
    const newUser = {
      email,
      password,
      title,
      firstName,
      lastName,
      phoneNumber
    }
    // 2. Insert the new user into the database
    const insertedUser = await UserModel.create(newUser)
    console.log(insertedUser)
    // 3. Send the new user with 201 status
    const token = jwt.sign({
      type: 'JWT',
      email: req.body.email,
      firstName: req.body.firstName
    }, SECRET_KEY, {
      expiresIn: '30m',
      issuer: 'PAWFUL_Dev'
    })
    return res.status(201).json({
      code: 201,
      message: `Thanks for registering! ${insertedUser.firstName}`,
      user_id: insertedUser._id,
      firstName: insertedUser.firstName,
      token: token
    })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// For login purposes
router.post('/login', async (req, res) => {
  console.log("Access to login");
  try {
    const user = await UserModel.findOne(req.body)
    if (user.password === req.body.password) {
      const token = jwt.sign({
        type: 'JWT',
        email: req.body.email,
        firstName: req.body.firstName
      }, SECRET_KEY, {
        expiresIn: '30m',
        issuer: 'PAWFUL_Dev'
      })
      return res.status(200).json({
        code: 200,
        message: `Welcome back to PAWFUL!, 
      ${user.firstName}`,
        user_id: user._id,
        firstName: user.firstName,
        token: token
      })
    } else {
      return res.status(404).send({ error: "LogIn failed. Please try again" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
});

// Get user details before updating my details 
router.get('/:id', verifyToken, async (req, res) => {
  // console.log("Access to find a user")
    try {
      const user = await UserModel.findById(req.params.id)
      if (user) {
        res.send(user)
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})


  
// Update user's detail
router.put('/:id', verifyToken, async (req, res) => {
    const { email, password, title, firstName, lastName, phoneNumber, isAdmin } = req.body
    const updatedUser = { 
      $set:{email}, 
      $set:{password}, 
      title, 
      firstName, 
      lastName, 
      phoneNumber, 
      $set:{isAdmin} }
    try {
      console.log("Updating user requested")
      const user = await UserModel.findByIdAndUpdate(req.params.id, updatedUser, { returnDocument: 'after'})
      if (user) {
        res.status(201).send(user)
        })
      } else {
        res.status(404).send({ error: 'Woof! User is not found!' })
      }
    }
    catch (err) {
      res.status(500).send({ error: 'Failed to save the data! Please try again later.' })
    }
})

  // Delete
router.delete('/:id', verifyToken, async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(204)//.send({ msg: "User deleted successfully"})
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})



export default router
