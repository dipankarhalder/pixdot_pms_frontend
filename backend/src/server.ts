/** Node modules */
import express from "express";
import cors from "cors";

/** Custom modules */
import config from "@/config";

/** Initial express app */
const app = express();

/** Middlewares */
app.use(cors());

/** Initial routes */
app.get("/", (req, res) => {
  res.json({
    message: "Hello from backend",
  });
});

/** Run the server */
app.listen(config.PORT, () =>
  console.log(`Server running on http://localhost:${config.PORT}`),
);
