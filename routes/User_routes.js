import express from 'express';

import { UserModel } from '../db.js';


const router = express.Router();

router.get('/', async (req, res) => {
  console.log("Access to find all users");
  // res.send(await UserModel.find().populate({ path: 'users', select: 'name' }))});
  res.send(await UserModel.find())});


router.get('/:id', async (req, res) => {
  console.log("Access to find a user")
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

router.post('/', async (req, res) => {
  console.log("Access for creating a user")
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
    // 3. Send the new user with 201 status
    res.status(201).send(insertedUser)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})
  
  // Update
router.put('/:id', async (req, res) => {
    const { email, password, title, firstName, lastName, phoneNumber, isAdmin } = req.body
    const updatedUser = { $set:{email}, $set:{password}, title, firstName, lastName, phoneNumber, $set:{isAdmin} }
    
    try {
      console.log("Updating user requested")
      const user = await UserModel.findByIdAndUpdate(req.params.id, updatedUser, { returnDocument: 'after'})
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

  // Delete
router.delete('/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(204) //need message to be sent ex) successfully deleted
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})



export default router