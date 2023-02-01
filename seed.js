import { UserModel, BookingModel, dbClose} from './db.js';
// import mongoose from 'mongoose'
// mongoose.set('strictQuery', true);
// Code below is used to delete all users and bookings from the database
await UserModel.deleteMany()
console.log('All Users deleted')
await BookingModel.deleteMany()
console.log('All Bookings deleted')


// Code below is used to seed the database with users
const users = [
{
  email: 'starfish@outlook.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Peter',
  lastName: 'Force',
  phoneNumber: '0448536959',
  isAdmin: false
},
{
  email: 'watermelonsquash@live.com',
  password: '112211',
  title: 'Mrs',
  firstName: 'Sammy',
  lastName: 'Smith',
  phoneNumber: '0487823264',
  isAdmin: false
},
{
  email: 'AmBeR@gmail.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Billy',
  lastName: 'Bigs',
  phoneNumber: '0478946362',
  isAdmin: false
},
{
  email: 'FernStacks@outlook.com',
  password: '123',
  title: 'Mrs',
  firstName: 'Fern',
  lastName: 'Stalis',
  phoneNumber: '0455566626',
  isAdmin: false
},
{
  email: 'Portland@live.com',
  password: '9874532',
  title: 'Mr',
  firstName: 'Larry',
  lastName: 'Sparks',
  phoneNumber: '0478989896',
  isAdmin: false
},
{
  email: 'BoobyBrownSenior@gmail.com',
  password: 'greengoblin',
  title: 'Mr',
  firstName: 'Bobby',
  lastName: 'Brown',
  phoneNumber: '0412363639',
  isAdmin: false
}
];

// example bookings
// const bookings = [
//   {
//     email: 'smithyjohn@gmail.com',
//     pkg: 'Package 1',
//     date: [{
//         year: '2022',
//         month: '12',
//         day: '25',
//         time: '0900'
//     }],
//     dog: [{
//         name: 'Henry',
//         gender: 'Male',
//         breed: 'Beagle',
//         age: 9,
//     }]
// },
// {
//     email: 'zzz123zzz@outlook.com',
//     pkg: 'Package 3',
//     date: [{
//         year: '2023',
//         month: '12',
//         day: '25',
//         time: '0900'
//     }],
//     dog: [{
//         name: 'Alex',
//         gender: 'Female',
//         breed: 'English Cockerspaniel',
//         age: 6,
//     }]
// },
// {
//     email: 'reddish@live.com',
//     pkg: 'Package 3',
//     date: [{
//         year: '2023',
//         month: '11',
//         day: '15',
//         time: '1000'
//     }],
//     dog: [{
//         name: 'Rex',
//         gender: 'Male',
//         breed: 'Portacolie',
//         age: 9,
//     }]
// },
// {
//     email: 'watermelonsquash@live.com',
//     pkg: 'Package 1',
//     date: [{
//         year: '2023',
//         month: '8',
//         day: '1',
//         time: '0930'
//     }],
//     dog: [{
//         name: 'Walter',
//         gender: 'Female',
//         breed: 'Dalmatian',
//         age: 7,
//     }]
// },
// {
//     email: 'peanutsinfridge@live.com',
//     pkg: 'Package 2',
//     date: [{
//         year: '2023',
//         month: '7',
//         day: '10',
//         time: '1000'
//     }],
//     dog: [{
//         name: 'Henry',
//         gender: 'Female',
//         breed: 'Poodle',
//         age: 5,
//     }]
// },
// {
//     email: 'disneydreamscometrue@outlook.com',
//     pkg: 'Package 1',
//     date: [{
//         year: '2023',
//         month: '5',
//         day: '5',
//         time: '0800'
//     }],
//     dog: [{
//         name: 'Samson',
//         gender: 'Male',
//         breed: 'Irish Setter',
//         age: '7',
//     }]
// },
// {
//     email: 'colormeblue@live.com',
//     pkg: 'Package 3',
//     date: [{
//         year: '2022',
//         month: '2',
//         day: '25',
//         time: '0700'
//     }],
//     dog: [{
//         name: 'Baxter',
//         gender: 'Female',
//         breed: 'Portacolie',
//         age: '8',
//     }]
// },
// {
//     email: 'watermelonsquash@live.com',
//     pkg: 'Package 4',
//     date: [{
//         year: '2022',
//         month: '2',
//         day: '17',
//         time: '1300'
//     }],
//     dog: [{
//         name: 'Missy',
//         gender: 'Male',
//         breed: 'Springer Spaniel',
//         age: 5,
//     }]
// }
// ];

await UserModel.insertMany(users);
// await BookingModel.insertMany(bookings);
console.log('Inserted users and bookings')


dbClose()






