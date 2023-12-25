const express = require("express");
const router = express.Router();
const { success } = require("./src/utils/response");
const { logger } = require("./src/utils/logger");

const test = async (req, res) => {
  try {
    console.log("Test req ::: ", req);
    return success(200, "Successfully tested.", res);
  } catch (e) {
    logger.error("Error in test ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};

router.get("/test", test);

module.exports = router;
