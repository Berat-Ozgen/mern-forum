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
    const questionAnswers = await QuestionAnswers.find({
      postId: req.params.postId,
    });
    res.status(200).json(questionAnswers);
  } catch (error) {
    res.status(404).json("hata");
  }
});

// bir postun yorumunu silmek
router.delete("/post-anwers-delete/:id", async (req, res) => {
  try {
    const questionAnswers = await QuestionAnswers.findById(req.params.id);
    if (questionAnswers.userId === req.body.deleteAnwers.userId) {
      await post.deleteOne();
      res.status(200).json("Başarılı bir şekilde silindi");
    } else {
      res.status(403).json("Post Silinirken bir hata oluştu");
    }
  } catch (err) {
    res.status(500).json("post catch");
  }
});

module.exports = router;
