const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    year: { type: String, required: true, unique: true },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Year", schema);
