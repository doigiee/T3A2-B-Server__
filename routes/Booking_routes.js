import express from "express"
import { BookingModel, UserModel } from "../db.js"

const router = express.Router()

router.get("/bookings", async (req, res) => res.send(await BookingModel.find()))

// Searching booking through User_id
router.get("/:id", async (req, res) => {
  console.log("Access to find users bookings by user_id : ", req.params.id );
  try {
    const booking = await BookingModel.find({ user: req.params.id })
    if (booking) {
      res.send(booking)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Searching a booking through Booking_id
router.get("/find/:id", async (req, res) => {
  console.log("Access to find the booking_id : " + req.params.id);
  try {
    const booking = await BookingModel.findOne({ _id: req.params.id })
    if (booking) {
      res.send(booking)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})


//Update
router.put("/:id", async (req, res) => {
  console.log('Booking update requested, Booking_id : ', req.params.id)
  const { user, pkg, date, dog } = req.body
  const updatedBooking = { user, pkg, date, dog }

  try {
    const booking = await BookingModel.updateOne(
      req.params,
      // {$set:updatedBooking.date},
      updatedBooking,
      { returnDocument: true }
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
router.delete("/:id", async (req, res) => {
  try {
    const booking = await BookingModel.findByIdAndDelete(req.params.id)
    if (booking) {
      console.log("Booking deleted", booking)
      res.sendStatus(204)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
})

//post
router.post("/", async (req, res) => {
  try {
    console.log("New booking coming in" , req.body)
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
      console.log("New booking coming in : " + savedBooking)
    res.status(201).send(await savedBooking)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  }
)

export default router
