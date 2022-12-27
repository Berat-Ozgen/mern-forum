const router = require("express").Router();
const Questions = require("../models/Questions.js");

router.post("/create-questions", async (req, res) => {
  try {
    const soru = await new Questions(req.body);
    await soru.save();
    res.status(200).json(soru);
  } catch (error) {
    res.status(500).json(error);
  }
});

// bütün soruları getir
router.get("/get-all-questions", async (req, res) => {
  try {
    const questions = await Questions.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).send("bir hata oluştu");
  }
});

module.exports = router;
