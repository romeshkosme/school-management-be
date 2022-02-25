const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    registrationNo: { type: String },
    dateOfJoining: { type: Date },
    dateOfLeaving: { type: Date },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Teacher", schema);
