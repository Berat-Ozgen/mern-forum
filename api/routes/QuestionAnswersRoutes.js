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

// bütün soruları getir
// router.get("/get-all-questions", async (req, res) => {
//   try {
//     const questions = await Questions.find();
//     res.status(200).json(questions);
//   } catch (error) {
//     res.status(500).send("bir hata oluştu");
//   }
// });

// kullanıcının sorularını getirme
// router.get("/get-usersposts", async (req, res) => {
//   const userId = req.query.userId;
//   const username = req.query.username;
//   try {
//     const questions = await Questions.find({ username: username });
//     res.status(200).json(questions);
//   } catch (error) {
//     res.status(500).json("bir hata oluştu");
//   }
// });

// birtane soru getir
// router.get("/get-singlepost/:id", async (req, res) => {
//   try {
//     const questions = await Questions.findById(req.params.id);
//     res.status(200).json(questions);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// soru silmek
// router.delete("/delete-post/:id", async (req, res) => {
//   try {
//     const post = await Questions.findById(req.params.id);
//     if (post.userId === req.body.deletePost.userId) {
//       await post.deleteOne();
//       res.status(200).json("Başarılı bir şekilde silindi");
//     } else {
//       res.status(403).json("Post Silinirken bir hata oluştu");
//     }
//   } catch (err) {
//     res.status(500).json("post catch");
//   }
// });

module.exports = router;
