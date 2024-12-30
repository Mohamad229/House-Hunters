const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
require('dotenv').config();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/userRoutes');
// const propertyRoutes = require('./routes/properties');
const propertyRoutes = require('./routes/NewProperties');

const citiesRouter = require('./routes/cities');

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cities', citiesRouter);
app.use('/api/properties', propertyRoutes);

// const uri = process.env.MONGO_URI || "mongodb+srv://HouseHunters:HouseHunters@cluster0.h1wk5.mongodb.net/HouseHunters";
// const uri = process.env.MONGO_URI || "mongodb+srv://anwarramo38:KtYuH4Ug56jcjV78@cluster0.z5s2h.mongodb.net/realstate";
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server running on: http://0.0.0.0:${PORT}`);
    })
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));