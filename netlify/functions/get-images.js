const cloudinary = require('cloudinary').v2;

// No need for dotenv in Netlify functions (they use Netlify env vars)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async function (event, context) {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 100,
    });

    if (!result.resources || result.resources.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'No images found.' }),
      };
    }

    const images = result.resources.map(image => ({
      id: image.public_id,
      title: image.public_id.split('/').pop().replace(/_/g, ' '),
      image: image.secure_url,
      folder: image.folder || 'root',
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(images),
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch images.', error: error.message }),
    };
  }
};
