// controllers/propertyController.js
const Property = require('../models/NewProperty');

// Get all properties
exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};

// Get properties by operation type (sale/rent)
exports.getPropertiesByOperation = async (req, res) => {
    const { operation } = req.params;
    try {
        const properties = await Property.find({ operation });
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};