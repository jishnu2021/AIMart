const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  oldPassword: { type: String, required: true },
  newPassword: { type: String, required: true },
  gender: { type: String, required: true },
  image: { type: String }, // store the image as a base64 string or URL
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
