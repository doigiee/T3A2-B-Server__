import express from "express"
import { BookingModel, UserModel } from "../db.js"
import { verifyToken } from '../middleware/auth.js';
const router = express.Router()

// All bookings
router.get("/", verifyToken, async (req, res) => res.send(await BookingModel.find()))

// Searching booking through User_id
router.post("/my_bookings", verifyToken, async (req, res) => {
  console.log("Access to find users bookings by user_id : ", req.body._id );
  try {
    const bookings = await BookingModel.find({ user: req.body._id })
    if (bookings) {
      res.send(bookings)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Searching a booking through Booking_id
router.get("/:id", verifyToken, async (req, res) => {
  console.log("Access to find the booking_id : " + req.params.id);
  try {
    const booking = await BookingModel.findOne({ _id: req.params.id })
    if (booking) {
      res.send(booking)
    } else {
      res.status(404).send({ error: "We can't find the booking." })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})


//Update
router.put("/:id", verifyToken, async (req, res) => {
  console.log('Booking update requested, Booking_id : ', req.params.id)
  const { user, pkg, date, dog } = req.body
  const updatedBooking = { user, pkg, date, dog }
  try {
    const booking = await BookingModel.findByIdAndUpdate(
      req.params.id,
      updatedBooking,
      { returnDocument: 'after' }
      )
      if (booking) {
        res.send(booking)
        console.log("Updated booking successfully")
      } else {
        res.status(404).send({ error: "Booking not found" })
      }
    } catch (err) {
      res.status(500).send({ error: err.message })
      console.log(err.message)
    }
  }
)

//Delete
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const booking = await BookingModel.findByIdAndDelete(req.params.id)
    console.log("Booking deleted")
    res.status(200).send({ msg: "Booking is deleted successfully."})
    return ;
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
})

//post
router.post("/", verifyToken, async (req, res) => {
  try {
    console.log("New booking coming in")
    const { user, pkg, date, dog } = req.body
    const userObject = await UserModel.findOne({ _id: user })
    const newBooking = { 
      user: userObject, 
      pkg: {
        name: pkg.name, 
        price: pkg.price
      }, 
      date: {
        year: date.year,
        month: date.month,
        date: date.date,
        time: date.time
      }, 
      dog: {
        name: dog.name,
        gender: dog.gender,
        age: dog.age,
        breed: dog.breed
      }
    }
      const savedBooking = await BookingModel.create(newBooking)
      console.log("New booking created : " + savedBooking)
    res.status(201).send(savedBooking)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  }
)

export default router
