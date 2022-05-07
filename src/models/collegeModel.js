const mongoose = require("mongoose");//importing mongoose(object data modeling library)
//creating structure of documents
const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },   
    fullName: {
      type: String,
      trim: true,
    },
    logoLink: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("college", collegeSchema);//naming new collection made Schema
