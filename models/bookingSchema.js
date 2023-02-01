// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     pkg: {
//         type: String,
//         required: true,
//     },
//     date: [{
//         year: {
//             type: String,
//             required: true
//         },
//         month: {
//             type: String,
//             required: true
//         },
//         date: {
//             type: String,
//             required: true
//         },
//         time: {
//             type: String,
//             required: true
//         }
//     }],
//     dog: [{
//         name: {
//             type: String,
//             required: true
//         },
//         gender: {
//             type: String,
//             required: true
//         },
//         breed: {
//             type: String
//         },
//         age: {
//             type: Number
//         }
//     }],
// });

// module.exports = mongoose.model('Booking', bookingSchema);