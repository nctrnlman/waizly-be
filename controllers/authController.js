const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secret = "secret";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, secret, { expiresIn: "1h" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "password") {
    const token = generateAccessToken(username);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Autentikasi gagal" });
  }
};

module.exports = { login };
