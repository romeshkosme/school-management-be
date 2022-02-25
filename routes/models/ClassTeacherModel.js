const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    active: { type: Boolean },
    status: { type: String },
    class: { type: mongoose.Types.ObjectId, ref: "Class" },
    teacher: { type: mongoose.Types.ObjectId, ref: "Teacher" },
    user: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("ClassTeacher", schema);
