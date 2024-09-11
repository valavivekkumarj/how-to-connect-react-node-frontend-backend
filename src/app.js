// Load environment variables from .env file if not in production
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}  

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const courseModel = require('../model/course');  // Corrected the path
const app = express();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Middleware for overriding HTTP methods (e.g., for PUT and DELETE)
app.use(methodOverride('_method'));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));  // Updated path

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming requests with JSON payloads and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer configuration for Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'filedata',
        allowed_formats: ['png', 'jpeg', 'jpg'],  // Fixed typo: allowedFormats
    },
});
const parser = multer({ storage: storage });

// Route to render the upload form
app.get('/upload', async (req, res) => {
    try {
        res.render('upload.ejs');
    } catch (err) {
        console.error(err);
    }
});

// Route to handle file upload
app.post('/upload', parser.single('image'), async (req, res) => {
    try {
        console.log(req.file);  // Log the uploaded file information
        // You can also save the file info to the database if needed
        res.send('File uploaded successfully');
    } catch (err) {
        console.error(err);
    }
});

// Listen on port 3000
app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Server running on port 3000');
    }
});
