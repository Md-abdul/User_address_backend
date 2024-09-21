const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: Address }],
});

const mongooseModel = mongoose.model("User", UserSchema);

module.exports = mongooseModel;