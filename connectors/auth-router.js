const router = require("express").Router();
const db = require("../config/knexConfig.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../api/secrets").jwtSecret;

router.post("/register", async (req, res) => {
  const creds = req.body;
  const { username, password } = creds;
  const hash = bcrypt.hashSync(password, 10);
  req.body.password = hash;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Submit both username and password when registering!" });
  }

  try {
    const [id] = await db("users").insert(creds);
    const user = await db("users")
      .where({ id })
      .first();

    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please submit both a username and a password" });
  }

  try {
    const user = await db("users")
      .where({ username })
      .first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome, ${user.username}`, token });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

generateToken = ({ id, username }) => {
  const payload = {
    subject: id,
    username
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
};

module.exports = router;
