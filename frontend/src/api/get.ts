import axios from "axios";

const API_URL = "http://localhost:8080/api";

const authApi = axios.create({
  baseURL: API_URL,
});

export async function getEnglishQuestions() {
  try {
    const res = await authApi.get("/learn-english");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
