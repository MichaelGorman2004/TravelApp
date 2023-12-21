require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
//import routes and do app.use with their api endpoint and routes

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port ' + process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Error connecting to the database: ', error);
    });