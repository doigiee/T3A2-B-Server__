[PAWFUL](https://pawful.netlify.app/)
[Trello Board](https://trello.com/b/eWwKHnN0/doggy-playground-web-app)
[Backend - Server API](https://github.com/doigiee/T3A2-B-Server__)
[Frontend](https://github.com/RyanWoolf/T3A2-Client)
[Youtube](https://www.youtube.com/watch?v=JTOWHwUrmpg)

Firstly run `npm init -y`, and `npm i express` then run `npm start` or `nodemon` to get the Server running. 


make a DB with Mongo DB. 
    
    1. create a user/account  then sign in 
    2. create a cluster as a free user and install the extension in vs code 'MongoDB for VScode'. 
    3. then create a database and seed it with the needed users entries by running the files in the following order by pressing the play button in the top right conner of each file
        - 'src/mongoDB_data_entries/1. create_users_database.mongodb'         
        - 'src/mongoDB_data_entries/2. create_bookings_database.mongodb'
        - 'src/mongoDB_data_entries/3. user_entries.mongodb'
  
 Disclaimer: before doing step 4, make sure to uncomment 'user' for each entry and manually copy and paste over the id of the newly created user_id from MongoDB. Once done you will be able to seed and connect the users to bookings. And do so by pressing the play button for the following file.
        - 'src/mongoDB_data_entries/4. booking_entries.mongodb'
    4. then create a .env file in the root of the project and  fill in the ATLAS DB connection string in the .env file, a sample file has been provided.

or alternatively to step 3, run `node seed.js` once your database 'PAWFUL' is created and connected with the 2 needed collections(can use `mongo_data_entries/1. create_users_database.mongodb` then `mongo_data_entries/2.createbookings_database.mongodb`) this will create 2 collections 'users' and 'bookings'. then do and `node seed.js`, in terminal, to seed users collection. Then manually insert the user_id from the ids created in users into `node seed2.js` to creating bookings which relate to your newly created users, as `users[2]._id` didn't work unfortunately. If followed correctly this will create some default entries into our DB's 'users' and 'bookings' collections.


Below are documentation and proof of user testing and the API endpoints as well as showing that our deployed application is fully tested. We obviously ran this code and did this kinda of manual testing 1000 times over but here are demonstrations of each kind of user testing which we did.

## Front-End Testing and Deployment

###Homepage###
--------------
![Alt text](docs/front_end_app.jpeg/Homepage.jpg)


###Booking###
--------------
**The pictures below demonstrates how easy it is made to choose one of the selected time for their booking.**

![Alt text](docs/front_end_app.jpeg/booking.jpg)

![Alt text](docs/front_end_app.jpeg/bookings.jpg)

![Alt text](docs/front_end_app.jpeg/one%20booking.jpg)





###Create Account###
--------------
**As simple as an email, title, name, phone number and password to get started. And very easy in user settings to update and change personal information as well!!**


![create account](docs/front_end_app.jpeg/create%20an%20account.jpg)

![create account success](docs/front_end_app.jpeg/create%20an%20account%20success.jpg)

![update details](docs/front_end_app.jpeg/update%20details.jpg)


###Login###
--------------
![login](docs/front_end_app.jpeg/login%20with%20message.jpg)

![logout](docs/front_end_app.jpeg/sucessfully%20logged%20out.jpg)

###Inquiry###
--------------
![make an inquiry](docs/front_end_app.jpeg/prep%20an%20inquiry.jpg)

![send inquiry](docs/front_end_app.jpeg/send%20a%20inquiry.jpg)


## Back-End Testing

###Login and Register###
--------------

![user login](docs/backend_mongodb.jpeg/userlogin.jpg)

![register](docs/backend_mongodb.jpeg/register.jpg)

###Get Requests###
--------------
![get all users](docs/backend_mongodb.jpeg/all%20users.jpg)

![get all bookings](docs/backend_mongodb.jpeg/get%20all%20bookings.jpg)

![get individual bookings](docs/backend_mongodb.jpeg/get%20my%20booking%20by%20ID.jpg)

![get user by id](docs/backend_mongodb.jpeg/get%20user%20by%20ID.jpg)



###Post Requests###
--------------
![post a booking](docs/backend_mongodb.jpeg/post%20a%20booking.jpg)

![post my booking](docs/backend_mongodb.jpeg/post%20my%20booking.jpg)


###Update Requests###
--------------
![update user by id](docs/backend_mongodb.jpeg/update%20user%20by%20ID.jpg)

![booking by my id](docs/backend_mongodb.jpeg/update%20booking%20by%20ID.jpg)

###Delete Requests###
--------------
![delete a user](docs/backend_mongodb.jpeg/delete%20user%20by%20ID.jpg)

![delete a booking](docs/backend_mongodb.jpeg/dellete%20a%20booking.jpg)

###Error Handling###
--------------
![error handling](docs/error_handling/error%20handling%201.jpg)

![error handling](docs/error_handling/error%20handling%202.jpg)

![error handling](docs/error_handling/error%20handling%20when%20user%20already%20exists%203.jpg)

![error handling](docs/error_handling/session%20expired%204.jpg)

![error handling](docs/error_handling/inncorrect%20credentials%205.jpg)

![error handling](docs/error_handling/inncorrect%20credentials%206.jpg)