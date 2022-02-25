const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    standard: { type: String, unique: true },
    active: { type: Boolean },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Class", schema);
