const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail) {
        throw new Error("Email not Valid");
      }
    },
  },
  age: {
    type: Number,
    default: 18,
    validate(val) {
      if (val < 0) {
        throw new Error("Age Must Bigger Then 0");
      }
    },
  },
  city: {
    type: String,
  },
});

module.exports = User;

// Task
// ********

// post 5 doc
// get all data
// get first 2
// patch first 3
//  delete 2

// post 5
// get all // get 1 2
// patch first 3 3
// del 2
