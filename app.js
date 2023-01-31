import express from 'express'
import { UserModel, BookingModel } from './db.js'
// import entryRoutes from './routes/entry_routes.js'
// import Booking_routes from './routes/Booking_routes.js'
// import User_routes from './routes/User_routes.js'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

// app.use(Booking_routes)

// app.use(User_routes)

// Home page 
app.get('/', (req, res) => {
    res.send('Home Route');
});

// Get all users
app.get('/users', async (req, res) => res.send(await UserModel.find()));
// app.get('/categories', async (req, res) => res.send(await CategoryModel.find()))

// Get a single user by id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
});

//post a new user
app.post('/users', async (req, res) => {
    const { email, title, firstName, lastName, phoneNumber } = req.body;
    const newUser = { email, title, firstName, lastName, phoneNumber };
    try {
        const user = await UserModel.create(newUser);
        res.send(user);
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// Update a single user by id
app.put('/users/:id', async (req, res) => {
    const { email, title, firstName, lastName, phoneNumber } = req.body
    const updatedUser = { email, title, firstName, lastName, phoneNumber }
    
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, updatedUser, { new: true })
      if (user) {
        res.send(user)
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(204).send({ success: 'User deleted' })
        console.log("User deleted")
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})

app.get("/bookings", async (req, res) => res.send(await BookingModel.find()))

app.get("/:id", async (req, res) => {
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
app.put("/bookings/:id", async (req, res) => {
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
app.delete("/bookings/:id", async (req, res) => {
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
app.post("/bookings", async (req, res) => {
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

export default app