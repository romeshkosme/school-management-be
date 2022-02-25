const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true },
    primaryPhoneNumber: { type: String },
    alternatePhoneNumber: { type: String },
    role: { type: String, enum: ["admin", "teacher", "student"] },
    password: { type: String },
    active: { type: Boolean, default: false },
    photo_url: { type: String },
    address: { type: mongoose.Types.ObjectId, ref: "Address" },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("User", schema);
