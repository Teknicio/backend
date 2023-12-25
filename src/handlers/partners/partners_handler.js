const express = require("express");
const router = express.Router();
const { middleware } = require("../../middleware/middleware");
const { fetch_data } = require("./fetch_data/fetch_data");

// all the partners routes
router.post("/partners/:id", middleware, fetch_data);

module.exports = router;
