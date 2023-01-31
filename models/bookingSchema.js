const mongoose = require('mongoose');

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

module.exports = mongoose.model('Booking', bookingSchema);

// const newBooking = new Booking({
//     name: 'Sandra',
//     email: 'sandra@gmail.com',
//     phone: '0400000000',
//     packages: 'Package 1',
//     created: new Date(),
//     date: new Date('2022-12-25T09:00:00'),
//     dog: [{
//         name: 'Henry',
//         gender: 'Male',
//         breed: 'Beagle',
//         age: 9,
//     }]
// });