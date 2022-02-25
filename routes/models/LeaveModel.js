const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    description: { type: String },
    reason: { type: String },
    type: { type: String },
    date: { type: Date },
    halfDay: { type: String },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Leave", schema);
