const { parse_response } = require("../../../utils/helper");
const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");
const db_service = require("../../../utils/db/service");
const {fetch_tests} = require("./queries");
const { validationResult } = require("express-validator");

module.exports.fetch_test_by_id = async (req, res) => {
  try {

    const errors = validationResult(req);



    console.log(req.url);
    let result;
    result = parse_response(
      await db_service.excute_statement(
        fetch_tests(req.body.id)
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
