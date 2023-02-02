import express from 'express'
import { UserModel, BookingModel } from './db.js'

import userRoutes from './routes/User_routes.js'
import bookingRoutes from './routes/Booking_routes.js'

import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())


app.use('/users', userRoutes)
app.use('/bookings', bookingRoutes)

// Home page 
app.get('/', (req, res) => {
  res.send('Home Route');
});

// Get all users
app.get('/users', async (req, res) => res.send(await UserModel.find()));

// Get all bookings
app.get("/bookings", async (req, res) => res.send(await BookingModel.find()))

export default app