import express from "express";
import cors from "cors";

import mainRouter from "./routes/main.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server running in port: http://localhost:${PORT}`);
});

app.use("/api", mainRouter);
