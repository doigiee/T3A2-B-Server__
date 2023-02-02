import express from 'express'
import userRoutes from './routes/User_routes.js'
import bookingRoutes from './routes/Booking_routes.js'

import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

// Home page 
app.get('/', (req, res) => {
  res.send('Home Route');
});

// Get all users
app.use('/users', userRoutes);

// Get all bookings
app.use("/bookings", bookingRoutes)

export default app