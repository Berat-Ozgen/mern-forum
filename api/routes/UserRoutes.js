const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// bir kullanıcı getirme

router.get("/get-user", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//kullanıcı eklemek olmak
router.post("/create-user", async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    console.log(`${user} kullanıcı başarılı şekilde eklendi`);
    res.status(200).json("başarılı bir şekilde kayıt olundu");
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

// kullanıcı güncelleme
router.put("/users-edit/:id", async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(`${user} bilgileriniz bu şekilde güncellenmiştir`);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

// kullanıcı silme

router.delete("/users-delete/:id", async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.status(200).json(`${user} kullanıcı başarılı bir şekilde silindi`);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

module.exports = router;
