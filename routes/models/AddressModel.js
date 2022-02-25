const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Address", schema);
