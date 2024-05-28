import express from "express";
import User from "../model/UsersModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let users = await User.findAll();
    return res.status(200).send(users);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

//ADD NEW TODO
router.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
    return res.send(newUser);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

router.post("/check-email", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      // Eğer e-posta adresi mevcutsa
      res.json({ available: false }); // Mevcut olduğunu belirten bir yanıt döndür
    } else {
      // Eğer e-posta adresi mevcut değilse
      res.json({ available: true }); // Mevcut olmadığını belirten bir yanıt döndür
    }
  } catch (error) {
    console.error("E-posta kontrolü sırasında bir hata oluştu:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user with email
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json(user.dataValues);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
