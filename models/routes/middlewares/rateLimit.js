import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 dakika
  max: 20,                   // 20 deneme sınırı
  message: "Çok fazla istek gönderildi, biraz bekleyin.",
});
