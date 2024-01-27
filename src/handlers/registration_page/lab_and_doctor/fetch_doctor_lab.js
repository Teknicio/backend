const { parse_response } = require("../../../utils/helper");
const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");
const db_service = require("../../../utils/db/service");
const { fetch_doctor_and_lab } = require("./queries");

module.exports.fetch_doctor_lab = async (req, res) => {
  try {
    console.log(req.url);

    let result;
    result = parse_response(
      await db_service.excute_statement(
        fetch_doctor_and_lab()
      )
    );

    // return success
    return success(200, result, res);
  } catch (e) {
    console.log(e);
    logger.error("Error in customer fetch data ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};
