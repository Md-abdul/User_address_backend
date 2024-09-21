const User = require("../models/userModel");
const Address = require("../models/addressModel");

const AddressAddedUser = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newUser = new User({ name });
    await newUser.save();

    const newAddress = new Address({ ...address, user: newUser._id });
    await newAddress.save();

    newUser.address.push(newAddress._id);
    await newUser.save();

    res.status(201).json({ message: "User and address saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};
module.exports = AddressAddedUser;
