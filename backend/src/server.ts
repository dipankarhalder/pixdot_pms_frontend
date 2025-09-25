/** Node modules */
import express from "express";
import cors from "cors";

/** Types */
import type { CorsOptions } from "cors";

/** Custom modules */
import config from "@/config";

/** Initial express app */
const app = express();

/** Config CORS options */
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (config.NODE_ENV === "development" || !origin) {
      callback(null, true);
    } else {
      callback(
        new Error(`CORS error: ${origin} is not allowed by CORS`),
        false,
      );
    }
  },
};

/** Middlewares */
app.use(cors(corsOptions)); /* CORS middleware */
app.use(express.json()); /* Enable JSON request body parsing */
app.use(
  express.urlencoded({ extended: true }),
); /* Request body parsing with extended mode */

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
