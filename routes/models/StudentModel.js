const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    gaurdianName: { type: String },
    registrationNo: { type: String },
    dateOfAdmission: { type: Date },
    dateOfTc: { type: Date },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Student", schema);
