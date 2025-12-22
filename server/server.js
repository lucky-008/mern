require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
  });
