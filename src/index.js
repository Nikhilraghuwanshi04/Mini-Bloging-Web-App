const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route/route.js');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://nikhilraghuwanshi04:fq6VMiCFQ4we4RFF@cluster0.igire1w.mongodb.net/blogWebsite', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api', routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
