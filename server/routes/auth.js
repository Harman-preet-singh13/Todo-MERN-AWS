// routes/auth.js
const express = require("express");
const User = require("../models/User");
const { generateToken } = require("../utils/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const user = await User.create({ username, password });
    const token = generateToken(user);
    res.json({ message: "Successfully register", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid Username" });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const token = generateToken(user);
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
