const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    type: { type: String },
    active: { type: Boolean, default: false },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("UserRole", schema);
