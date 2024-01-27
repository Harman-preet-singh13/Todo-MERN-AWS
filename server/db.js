// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harmanp:harmanp@cluster0.h7jvlye.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
