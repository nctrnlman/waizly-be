const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { authenticateToken } = require("./middlewares/authMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect("mongodb://localhost:27017/api_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
require("dotenv").config();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Rute untuk otentikasi
app.use("/auth", authRoutes);

// Middleware Otentikasi & Otorisasi
app.use("/users", authenticateToken);

// Rute untuk CRUD user
app.use("/users", userRoutes);

// Server Running
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
