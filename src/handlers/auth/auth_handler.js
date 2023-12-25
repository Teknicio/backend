const express = require("express");
const router = express.Router();
const { login } = require("./login/login");

router.post("/login", login);

module.exports = router;
