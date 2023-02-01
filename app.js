import express from 'express'
import { UserModel, BookingModel } from './db.js'

import userRoutes from './routes/user_routes.js'
import bookingRoutes from './routes/Booking_routes.js'

import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

// Home page 
app.get('/', (req, res) => {
  res.send('Home Route');
});

// Users routes connector
app.use('/users', userRoutes);

// Booking routes connector
app.use("/bookings", bookingRoutes)

export default app