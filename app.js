require('dotenv').config();
const express = require('express');
const intersectionsRoute = require('./routes/intersectionRoutes');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json({ limit: '10mb' }));

const secretKey = 'secret123'; // Replace with a secret key of your choice

const payload = {
  userId: '123',
  username: 'saket',
  role: 'admin',
};

const options = {
  expiresIn: '1h', // Set the expiration time of the token
};

const token = jwt.sign(payload, secretKey, options);

console.log('Token:', token);

// Use the intersections route
app.use('/', intersectionsRoute);

const port = 3000; // Use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
