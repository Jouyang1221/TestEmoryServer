import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const getUserList = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserListByUsername = asyncHandler(async (req, res) => {
  const user = await User.find({ username: req.params.username }).exec();

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { authUser, getUserList, getUserListByUsername };
