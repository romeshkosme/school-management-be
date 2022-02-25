const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    year: { type: String },
    class: { type: mongoose.Types.ObjectId, ref: "Class" },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("ClassYear", schema);
