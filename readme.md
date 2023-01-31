Firstly run `npm init -y`, and `npm i express` then run `npm start` or `nodemon` to get the Server running. 


make a DB with Mongo DB. 
    
    1. create a user/account  then sign in 
    2. create a cluster as a free user and install the extension in vs code 'MongoDB for VScode'. 
    3. then create a database and seed it will the needed entries by running the files in the following order by pressing the play button in the top right conner of each file
        - 'src/mongoDB_data_entries/1. create_users_database.mongodb'         
        - 'src/mongoDB_data_entries/2. create_bookings_database.mongodb'
        - 'src/mongoDB_data_entries/3. user_entries.mongodb'
        - 'src/mongoDB_data_entries/4. booking_entries.mongodb'
    4. then create a .env file in the root of the project and  fill in the ATLAS DB connection string in the .env file, a sample file has been provided.

or alternatively run `node seed.js` once your database 'PAWFUL' is created and connected (can use `mongo_data_entries/1. create_users_database.mongodb`) to create database 'PAWFUL'.