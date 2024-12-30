// models/Property.js
const mongoose = require('mongoose');

const NewpropertySchema = new mongoose.Schema({
    location: { type: String, required: true },
    address: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    price: { type: Number, required: true },
    propertyType: { type: String, enum: ['flat', 'villa', 'house'], required: true, },
    operation: { type: String, enum: ['sale', 'rent'], required: true, },
    Bedrooms: { type: Number, required: true },
    Bathrooms: { type: Number, required: true },
    squaremeter: { type: Number, required: true },
    Description: { type: String, required: true },

}, { timestamps: true }); // Automatically manage createdAt and updatedAt

module.exports = mongoose.model('NewProperty', NewpropertySchema);






// [
//     {
//         "address": "123 Elm Street, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 250000,
//         "propertyType": "house",
//         "operation": "sale",
//         "Bedrooms": 3,
//         "Bathrooms": 2,
//         "squaremeter": 120,
//         "Description": "A beautiful family house with a spacious garden."
//     },
//     {
//         "address": "456 Oak Avenue, Springfield",
//         "images": [
//             "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 300000,
//         "propertyType": "villa",
//         "operation": "sale",
//         "Bedrooms": 4,
//         "Bathrooms": 3,
//         "squaremeter": 200,
//         "Description": "Luxurious villa with modern amenities."
//     },
//     {
//         "address": "789 Pine Road, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1515120263166-b676e1f61045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1500,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 2,
//         "Bathrooms": 1,
//         "squaremeter": 80,
//         "Description": "Cozy Flat located in the city center."
//     },
//     {
//         "address": "321 Maple Lane, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 500000,
//         "propertyType": "house",
//         "operation": "sale",
//         "Bedrooms": 5,
//         "Bathrooms": 4,
//         "squaremeter": 250,
//         "Description": "Spacious house with a large backyard."
//     },
//     {
//         "address": "654 Birch Drive, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1512621480870-77463b1b90c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1200,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 1,
//         "Bathrooms": 1,
//         "squaremeter": 60,
//         "Description": "Modern Flat with a stunning view."
//     },
//     {
//         "address": "987 Cedar Street, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1716807335226-dfe1e2062db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhfGVufDB8fDB8fHww"
//         ],
//         "price": 350000,
//         "propertyType": "villa",
//         "operation": "sale",
//         "Bedrooms": 3,
//         "Bathrooms": 2,
//         "squaremeter": 180,
//         "Description": "Elegant villa in a quiet neighborhood."
//     },
//     {
//         "address": "135 Walnut Avenue, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1460408037948-b89a5e837b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1800,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 2,
//         "Bathrooms": 2,
//         "squaremeter": 75,
//         "Description": "Charming Flat close to public transport."
//     },
//     {
//         "address": "246 Cherry Road, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 400000,
//         "propertyType": "house",
//         "operation": "sale",
//         "Bedrooms": 4,
//         "Bathrooms": 3,
//         "squaremeter": 220,
//         "Description": "Newly built house with modern design."
//     },
//     {
//         "address": "357 Ash Lane, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1618922774766-9f9e4a2dc021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 700,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 1,
//         "Bathrooms": 1,
//         "squaremeter": 50,
//         "Description": "Compact Flat perfect for singles."
//     },
//     {
//         "address": "468 Pine Avenue, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1562239409-b5c79828df9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZpbGxhfGVufDB8fDB8fHww"
//         ],
//         "price": 220000,
//         "propertyType": "villa",
//         "operation": "sale",
//         "Bedrooms": 3,
//         "Bathrooms": 2,
//         "squaremeter": 160,
//         "Description": "Villa with a private pool and garden."
//     },
//     {
//         "address": "579 Oak Street, Springfield",
//         "images": [
//             "https://plus.unsplash.com/premium_photo-1714023800208-642cc8187a26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 850,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 2,
//         "Bathrooms": 1,
//         "squaremeter": 70,
//         "Description": "Spacious Flat with modern amenities."
//     },
//     {
//         "address": "680 Elm Drive, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 450000,
//         "propertyType": "house",
//         "operation": "sale",
//         "Bedrooms": 4,
//         "Bathrooms": 3,
//         "squaremeter": 240,
//         "Description": "Beautiful house with traditional architecture."
//     },
//     {
//         "address": "791 Maple Street, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1592669282789-cf5eac5807e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1300,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 1,
//         "Bathrooms": 1,
//         "squaremeter": 55,
//         "Description": "Stylish Flat in the heart of the city."
//     },
//     {
//         "address": "902 Birch Avenue, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1616012760010-8da02da071fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpbGxhfGVufDB8fDB8fHww"
//         ],
//         "price": 320000,
//         "propertyType": "villa",
//         "operation": "sale",
//         "Bedrooms": 3,
//         "Bathrooms": 2,
//         "squaremeter": 190,
//         "Description": "Luxurious villa with high-end finishes."
//     },
//     {
//         "address": "213 Cedar Lane, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1000,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 1,
//         "Bathrooms": 1,
//         "squaremeter": 65,
//         "Description": "Affordable Flat near campus."
//     },
//     {
//         "address": "324 Pine Road, Springfield",
//         "images": [
//             "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D"
//         ],
//         "price": 270000,
//         "propertyType": "house",
//         "operation": "sale",
//         "Bedrooms": 3,
//         "Bathrooms": 2,
//         "squaremeter": 150,
//         "Description": "Family house in a friendly neighborhood."
//     },
//     {
//         "address": "435 Oak Street, Springfield",
//         "images": [
//             "https://plus.unsplash.com/premium_photo-1680028256635-17e7f3ebbb23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 1500,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 2,
//         "Bathrooms": 1,
//         "squaremeter": 80,
//         "Description": "Modern Flat with great views."
//     },
//     {
//         "address": "546 Maple Avenue, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1721989518229-3e84837fc398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpbGxhfGVufDB8fDB8fHww"
//         ],
//         "price": 600000,
//         "propertyType": "villa",
//         "operation": "sale",
//         "Bedrooms": 5,
//         "Bathrooms": 4,
//         "squaremeter": 300,
//         "Description": "Spacious villa perfect for large families."
//     },
//     {
//         "address": "657 Elm Road, Springfield",
//         "images": [
//             "https://images.unsplash.com/photo-1729110275798-62639cf43df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
//         ],
//         "price": 800,
//         "propertyType": "Flat",
//         "operation": "rent",
//         "Bedrooms": 1,
//         "Bathrooms": 1,
//         "squaremeter": 50,
//         "Description": "Cozy Flat in a prime location."
//     }
// ]