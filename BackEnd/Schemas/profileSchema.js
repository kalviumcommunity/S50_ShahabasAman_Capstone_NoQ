// serviceProfile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: String,
  name: String,
  category: String,
  avatar: { type: String },
  location: String,
  zip: Number,
  website: String,
  bio: String,
  email: String,
  picture: { type: String },
  review: Number,
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section'
  }
});

const ServiceProfile = mongoose.model('Profile', profileSchema);
module.exports = ServiceProfile;
