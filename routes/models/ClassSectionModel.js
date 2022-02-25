const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    section: { type: String },
    active: { type: Boolean },
    class: { type: mongoose.Types.ObjectId, ref: "Class" },
  },
  { timestamps: true },
  { versionKey: true }
);

module.exports = mongoose.model("ClassSection", schema);
