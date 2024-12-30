// routes/propertyRoutes.js
const express = require('express');
const {
    getAllProperties,
    getPropertiesByOperation,
} = require('../controllers/NewPropertyController');

const router = express.Router();

// Define the routes
router.get('/', getAllProperties); // Get all properties
router.get('/:operation', getPropertiesByOperation); // Get properties by operation (sale/rent)

module.exports = router;