const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

//  This line tells the Express.js app to use the json middleware, which parses incoming request bodies in JSON format.

app.use(express.urlencoded({ extended: true }));

//  This line tells the Express.js app to use the urlencoded middleware, which parses incoming request bodies in URL-encoded format. The extended: true option allows the middleware to accept complex objects.

app.use(express.static('public'));

// This line tells the Express.js app to use the static middleware, which serves static files from the public directory. If 
// there were to be one. 


app.use(require('./routes/api'));

// This line connects the Mongoose instance to a MongoDB database. If the MONGODB_URI environment variable is set, it will be used to connect to the database. 
//  If the MONGODB_URI environment variable is not set, the default connection string mongodb://127.0.0.1:27017/cesar-chat will be used to connect to a local MongoDB instance.
//  The useNewUrlParser and useUnifiedTopology options are used to specify the parser and topology settings for the connection.

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cesar-chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// This line sets the debug mode for the Mongoose instance to true, which will cause Mongoose to log debugging information to the console.

mongoose.set('debug', true)


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)); 