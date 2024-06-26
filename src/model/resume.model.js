const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  resumeData: {
    type: Object,
    required: true,
  },
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
