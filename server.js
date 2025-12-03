import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

// Static dosyaları sunmak için
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Public klasöründeki HTML dosyamızı sunalım
app.use(express.static("public"));

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Bağlantısı Başarılı"))
  .catch(err => console.log("MongoDB Hatası:", err));

// Basit bir test endpointi
app.get("/api/test", (req, res) => {
  res.json({ message: "API çalışıyor!" });
});

// Render PORT’u kendi belirler
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu çalışıyor → ${PORT}`));
