import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// mongoose.set('strictQuery', true)

//Closes it each time.
async function dbClose() {
  await mongoose.connection.close()
  console.log("Database is disconnected!")
}

// Connect to MongoDB through Mongoose, replies with either true or false/ connected or error
try {
//   console.log(process.env)
  const server = mongoose.connect(process.env.ATLAS_DB_URL)
  .then((m) => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect'))
} catch (err) {
  console.log(err)
}

// Create a Mongoose schema to define the structure of a model

//crete one for user ...
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Create a Mongoose model based on the userSchema
const UserModel = mongoose.model('User', userSchema)

// ... and one for booking ...
const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    pkg: {
        type: String,
        required: true,
    },
    date: [{
        year: {
            type: String,
            required: true
        },
        month: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }],
    dog: [{
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        breed: {
            type: String
        },
        age: {
            type: Number
        }
    }],
});

// Create a Mongoose model based on the bookingSchema
const BookingModel = mongoose.model('Booking', bookingSchema)


export { UserModel, BookingModel, dbClose }