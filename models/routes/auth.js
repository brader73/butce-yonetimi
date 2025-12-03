import express from "express";
import User from "../models/User.js";

const router = express.Router();

// KAYIT OL
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: "Kullanıcı zaten var" });

    const user = new User({ username, password });
    await user.save();

    req.session.userId = user._id;

    res.json({ message: "Kayıt başarılı", username: user.username });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
});

// GİRİŞ YAP
router.post("/login", async (req, res) => {
  try {
    const { username, pas
