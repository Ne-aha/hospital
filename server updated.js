const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();

// MongoDB connection details
const uri = "your-hospital-database-url"; // Replace with your actual MongoDB connection URI
const dbName = "hospital"; // Example database name

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Initialize MongoDB Client
let db;
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName); // Set the database instance
    console.log(`Connected to MongoDB Database: ${dbName}`);
  })
  .catch(error => console.error(error));

// API route to handle appointment scheduling
app.post('/api/schedule-appointment', (req, res) => {
  const { type, date, timeSlot } = req.body;

  // Insert appointment data into MongoDB
  const appointmentsCollection = db.collection('appointments');
  appointmentsCollection.insertOne({ type, date, timeSlot })
    .then(result => {
      console.log('Appointment saved:', result);
      res.json({ message: 'Appointment scheduled successfully!' });
    })
    .catch(error => {
      console.error('Error saving appointment:', error);
      res.status(500).json({ message: 'Failed to schedule appointment.' });
    });
});

// API route to handle doctor form submissions
app.post('/api/submit', (req, res) => {
  const doctorData = req.body;

  // Insert doctor form data into MongoDB
  const doctorsCollection = db.collection('doctors');
  doctorsCollection.insertOne(doctorData)
    .then(result => {
      console.log('Doctor data saved:', result);
      res.status(200).json({ message: 'Doctor data received successfully' });
    })
    .catch(error => {
      console.error('Error saving doctor data:', error);
      res.status(500).json({ message: 'Failed to submit doctor data.' });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
