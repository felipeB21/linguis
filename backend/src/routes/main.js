import { Router } from "express";
const router = Router();

import {
  getEnglishQuestions,
  handleEnglishQuestions,
} from "../controller/main.js";

router.get("/learn-english", getEnglishQuestions);
router.post("/learn-english", handleEnglishQuestions);

export default router;
