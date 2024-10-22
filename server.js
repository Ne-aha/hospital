const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse POST request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS for cross-origin requests (in case front-end is served from a different domain)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API route to handle appointment scheduling
app.post('/api/schedule-appointment', (req, res) => {
  const { type, date, timeSlot } = req.body;

  // Here you can process the appointment data (store in a database or send an email, etc.)
  console.log(`Appointment Type: ${type}`);
  console.log(`Appointment Date: ${date}`);
  console.log(`Appointment Time Slot: ${timeSlot}`);

  // Sending a success response back to the front-end
  res.json({ message: 'Appointment scheduled successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//doctors_form:

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // If you need to handle cross-origin requests
const app = express();

// Middleware
app.use(bodyParser.json()); // To handle JSON data
app.use(bodyParser.urlencoded({ extended: true })); // To handle URL-encoded data
app.use(cors()); // Optional: Enable CORS if frontend and backend are on different domains/ports

// Route to handle form data
app.post('/api/submit', (req, res) => {
  const doctorData = req.body;

  // Perform server-side processing like saving the data to a database here
  console.log('Received Doctor Data:', doctorData);

  // Respond back to client
  res.status(200).json({ message: 'Form data received successfully' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//find a doc

// server.js
const express = require('express');
const cors = require('cors'); // To enable cross-origin requests from the frontend

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS to allow AngularJS to access the backend


