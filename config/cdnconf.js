const cloudinary = require('cloudinary').v2;
require('dotenv').config({path:`.env.${process.env.ENV}`});
cloudinary.config({ 
    cloud_name: proccess.env.CLOUD_NAME, 
    api_key: proccess.env.API_KEY, 
    api_secret: proccess.env.API_SECRET,
    secure: proccess.env.SECURE
  });