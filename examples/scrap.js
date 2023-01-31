import express from "express"
import { BookingModel } from "../db.js";

app.use(bodyParser.json());
const router = express.Router();

let bookings = [];

// Check permission and access 
app.get('/check', (req, res) => {
  res.send(req.params.id)
  res.status(200).json({ status: 'success' })
  ;
});

// All bookings 
app.get('/bookings', (req, res) => {
  res.status(200).json({ bookings: bookings });
});

// Creates a new booking
app.post('/bookings', (req, res) => {
  let newBooking = req.body;
  bookings.push(newBooking);
  res.status(201).json({ booking: newBooking });
});

// Modifies an existing booking
app.put('/bookings/:id', (req, res) => {
  let bookingId = req.params.id;
  let updatedBooking = req.body;
  bookings = bookings.map(booking => {
    if (booking.id === bookingId) {
      return { ...booking, ...updatedBooking };
    }
    return booking;
  });
  res.status(200).json({ booking: updatedBooking });
});

// Delete a booking
app.delete('/bookings/:id', (req, res) => {
  let bookingId = req.params.id;
  bookings = bookings.filter(booking => booking.id !== bookingId);
  res.status(200).json({ message: 'Booking was deleted' });
});

export default router