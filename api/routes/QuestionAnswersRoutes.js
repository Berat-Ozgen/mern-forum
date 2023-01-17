const router = require("express").Router();
const QuestionAnswers = require("../models/QuestionAnswers.js");

// yeni bir QuestionAnswers oluşturma
router.post("/create-questionAnswers", async (req, res) => {
  try {
    const questionAnswers = await new QuestionAnswers(req.body);
    await questionAnswers.save();
    res.status(200).json(questionAnswers);
  } catch (error) {
    res.status(500).json("yeni bir questionAnswers oluştururken hata çıktı");
  }
});

// bir postun yorumlarını getirme

router.get("/post-anwers/:postId", async (req, res) => {
  try {
    const questionAnswers = await QuestionAnswers.find(req.params.postId);
    res.status(200).json(questionAnswers);
    res;
  } catch (error) {
    res.status(404).json("hata");
  }
});

module.exports = router;
