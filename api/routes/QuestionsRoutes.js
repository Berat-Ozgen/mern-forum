const router = require("express").Router();
const Questions = require("../models/Questions.js");

// yeni bir soru oluşturma
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

// kullanıcının sorularını getirme
router.get("/get-usersposts", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const questions = await Questions.find({ username: username });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json("bir hata oluştu");
  }
});

// birtane soru getir
router.get("/get-singlepost/:id", async (req, res) => {
  try {
    const questions = await Questions.findById(req.params.id);
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).send(err);
  }
});

// soru silmek
router.delete("/delete-post/:id", async (req, res) => {
  try {
    const post = await Questions.findById(req.params.id);

    if (post.userId === req.body.deletePost.userId) {
      await post.deleteOne();
      res.status(200).json("Başarılı bir şekilde silindi");
    } else {
      res.status(403).json("Post Silinirken bir hata oluştu");
    }
  } catch (err) {
    res.status(500).json("post catch");
  }
});

// soruyu begenmek
router.post("/like-post", async (req, res) => {
  try {
    const question = await Questions.findById(req.body.questionId);

    // Kullanıcının daha önce soruyu beğenip beğenmediğini kontrol et
    const userLikedIndex = question.like.findIndex(
      (likedUserId) => likedUserId === req.body.userId
    );

    // Kullanıcının soruyu beğenmemişse, soruyu beğen ve kaydet
    if (userLikedIndex === -1) {
      question.like.push(req.body.userId);
      await question.save();
      res.status(200).json({ success: true, liked: true });
    } else {
      // Kullanıcının soruyu daha önce beğendiği bilgisini sakla ve beğeniyi kaldır

      question.like.splice(userLikedIndex, 1);
      await question.save();
      res.status(200).json({ message: "beğeni işlemi başarıyla kaldırıldı" });
    }
  } catch (error) {
    res.status(404).json({ error: "hata aldınız" });
  }
});

//soruya dislike atmak

router.post("/dislike-post", async (req, res) => {
  try {
    const question = await Questions.findById(req.body.questionId);

    // Kullanıcının daha önce soruyu beğenip beğenmediğini kontrol et
    const userDisLikedIndex = question.dislike.findIndex(
      (likedUserId) => likedUserId === req.body.userId
    );

    // Kullanıcının soruyu beğenmemişse, soruyu beğen ve kaydet
    if (userDisLikedIndex === -1) {
      question.dislike.push(req.body.userId);
      await question.save();
      res.status(200).json({ success: true, dislike: true });
    } else {
      // Kullanıcının soruyu daha önce beğendiği bilgisini sakla ve beğeniyi kaldır

      question.dislike.splice(userDisLikedIndex, 1);
      await question.save();
      res.status(200).json({ message: "Dislike işlemi başarıyla kaldırıldı" });
    }
  } catch (error) {
    res.status(404).json({ error: "hata aldınız" });
  }
});

module.exports = router;
