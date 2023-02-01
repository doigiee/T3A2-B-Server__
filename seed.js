import { UserModel, dbClose} from './db.js';
// import mongoose from 'mongoose'
// mongoose.set('strictQuery', true);
// Code below is used to delete all users and bookings from the database
await UserModel.deleteMany()
console.log('All Users deleted')


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



await UserModel.insertMany(users);
console.log('Inserted users')


dbClose()






