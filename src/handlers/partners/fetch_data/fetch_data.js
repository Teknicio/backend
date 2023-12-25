const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");

module.exports.fetch_data = async (req, res) => {
  try {
    console.log(req.url);

    const transformer = {
      name: "Abhay",
    };

    // return success
    return success(200, transformer, res);
  } catch (e) {
    logger.error("Error in customer fetch data ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};
