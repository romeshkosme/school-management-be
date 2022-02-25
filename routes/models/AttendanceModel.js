const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    present: { type: Boolean, required: true },
    halfDay: { type: Boolean },
    date: { type: Date },
    leave: { type: mongoose.Types.ObjectId, ref: "Leave" },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("Attendance", schema);
