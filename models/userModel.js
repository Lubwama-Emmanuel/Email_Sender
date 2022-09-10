const mongoose = require("mongoose");
const validator= require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a prefered name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email address"],
    lowercase: true,
    validate: validator.isEmail
  },
});

module.exports = mongoose.model("User", userSchema);
