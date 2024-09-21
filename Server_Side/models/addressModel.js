const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const mongooseModel = mongoose.model("Address", addressSchema);
module.exports = mongooseModel;
