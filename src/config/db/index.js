const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
    console.log(" Connect to MongoDB successfully!");
  } catch (error) {
    console.log(" Connect to MongoDB failed!", error);
  }
}

module.exports = { connect };
