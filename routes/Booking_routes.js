import express from "express"
import { BookingModel } from "./db.js"

const router = express.Router()

router.get("/", async (req, res) => res.send(await BookingModel.find()))

router.get("/:id", async (req, res) => {
  try {
    const booking = await BookingModel.findById(req.params.id)
    if (booking) {
      res.send(booking)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

//Upadate
router.put("/:id", async (req, res) => {
  const { email, pkg, date, dog } = req.body
  const updatedBooking = { email, pkg, date, dog }

  try {
    const booking = await BookingModel.findByIdAndUpdate(
      req.params.id,
      updatedBooking,
      { new: true }
    )
    if (booking) {
      res.send(booking)
    } else {
      res.status(404).send({ error: "Booking not found" })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
)

//Delete
router.delete("/:id", async (req, res) => {
  try {
    const booking = await BookingModel.findByIdAndDelete(req.params.id)
    if (booking) {
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
    const { email, pkg, date, dog } = req.body
    const newBooking = { email, pkg, date, dog }
    const savedBooking = await BookingModel.create(newBooking)
    res.send(savedBooking)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
)

export default router
