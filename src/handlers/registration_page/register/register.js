const { validationResult } = require("express-validator");
const { logger } = require("../../../utils/logger");
const { success, failure } = require("../../../utils/response");
const { parse_response } = require("../../../utils/helper");
const db_service = require("../../../utils/db/service");
const {
  check_partner_referral_code,
  check_user_and_partner_mapping,
  add_registration_data_ot_table,
} = require("./queries");

module.exports.register = async (req, res) => {
  try {
    //console.log(req.body.name);

  

    const errors = validationResult(req);

    console.log("Reach here");


   if(errors.isEmpty){

    console.log("No error");

    let result;


    result = parse_response(
      await db_service.excute_statement(
        add_registration_data_ot_table({
          name:req.body.name,
          age:req.body.age,
          mobile:req.body.mobile,
          doctor_id:req.body.doctor_id,
          doctor_name:req.body.doctor_name,
          gender:req.body.gender,
          tests:req.body.tests,
          total_payment: req.body.total_payment,
        discount_type: req.body.discount_type,
        discount_value: req.body.discount_value,
        final_payment: req.body.final_payment,
        payment_status: req.body.payment_status,
        payment_mode: req.body.payment_mode,
        paid_amount: req.body.paid_amount
        }
         
          )
      )
    );

    console.log(result);
    

   }else{
    return failure(422, json({errors: errors.array()}));
   }



    // return success
    return success(200, {
      "message":"Form registered"
    }, res);
  } catch (e) {
    logger.error("Error in customer fetch data ::: ", e);
    return failure(400, "Internal server error.", res);
  }
};
