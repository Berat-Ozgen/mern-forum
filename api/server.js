const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const UserRoutes = require("./routes/UserRoutes.js");
const AuthRoutes = require("./routes/AuthRoutes.js");
const Questions = require("./routes/QuestionsRoutes.js");
const QuestionAnswers = require("./routes/QuestionAnswersRoutes.js");

app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0.xiyjfbj.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect");
  }
};

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/questions", Questions);
app.use("/api/questionAnswers", QuestionAnswers);

app.listen(8000, () => {
  console.log("8000 port listening on");
  connect();
});
