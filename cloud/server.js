// server.js

const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
app.use(cors());

// Configure Cloudinary with env vars
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Endpoint to list all images (up to 100)
app.get('/api/images', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 100, // You can paginate if needed
    });

    if (!result.resources || result.resources.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    // Print public_ids to see folder structure
    console.log('=== Cloudinary image paths ===');
    result.resources.forEach(img => console.log(img.public_id));

    // Prepare frontend-friendly format
    const images = result.resources.map(image => ({
      id: image.public_id,
      title: image.public_id.split('/').pop().replace(/_/g, ' '),
      image: image.secure_url,
      folder: image.folder || 'root',
    }));

    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Failed to fetch images.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
