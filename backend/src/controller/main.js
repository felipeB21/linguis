import { EnglishQuestions } from "../lib/english.js";

export const getEnglishQuestions = (req, res) => {
  const game = EnglishQuestions;
  if (!game || game.length == 0) {
    return res.status(500).json({ message: "Internal server error." });
  }
  return res.status(200).json(game);
};

export const handleEnglishQuestions = (req, res) => {
  const game = EnglishQuestions;

  if (!game || game.length === 0) {
    return res.status(500).json({ message: "Internal server error." });
  }

  const { answer } = req.body;

  if (!answer) {
    return res.status(400).json({ message: "Answer is required" });
  }

  let points = 0;
  game.forEach((question) => {
    const correctAnswer = question.correctAnswer;
    if (answer === correctAnswer) {
      points += 1;
    }
  });

  return res.status(200).json({ totalPoints: points });
};
