const express = require("express");
const router = express.Router();
const { middleware } = require("../../middleware/middleware");
const body  = require("express-validator");

const { register } = require("./register/register");
const { registerValidator } = require("../../validators/register/register_validator");
const { fetch_doctor_lab } = require("./lab_and_doctor/fetch_doctor_lab");
const { fetch_tests, fetch_categories } = require("./tests/queries");
const { fetch_test_by_id } = require("./tests/fetch_tests");
const { fetch_all_categories } = require("./tests/fetch_categories");


// all the partners routes
router.post("/register",middleware, 


[

    body.body('name', 'Cannot be empty').not().isEmpty(),
    body.body('mobile', 'Cannot be empty').not().isEmpty(),
    body.body('age', 'Cannot be empty').not().isEmpty(),
    body.body('gender', 'Cannot be empty').not().isEmpty(),
    body.body('doctor_id', 'Cannot be empty').not().isEmpty(),
    body.body('doctor_name', 'Cannot be empty').not().isEmpty(),
    body.body('tests', 'Cannot be empty').not().isEmpty(),
    body.body('total_payment', 'Cannot be empty').not().isEmpty(),
    body.body('discount_type', 'Cannot be empty').not().isEmpty(),
    body.body('discount_value', 'Cannot be empty').not().isEmpty(),
    body.body('final_payment', 'Cannot be empty').not().isEmpty(),
    body.body('payment_status', 'Cannot be empty').not().isEmpty(),
    body.body('payment_mode', 'Cannot be empty').not().isEmpty(),
    body.body('paid_amount', 'Cannot be empty').not().isEmpty(),
    body.body('mobile', 'Cannot be empty').isMobilePhone(),

]


,
checkValidationRegister,


 register);

 router.post("/getTest",middleware, 


[
    body.body('id', 'Cannot be empty').not().isEmpty(),
]
,
checkValidationTest,
 fetch_test_by_id);


 router.get("/getDoctorAndLab", middleware, fetch_doctor_lab);

 router.get("/getCategories", middleware, fetch_all_categories);

 function checkValidationRegister(req, res, next){
    const result = body.validationResult(req);
    if (result.isEmpty()) {
        return next();
    }

    res.status(422).json({ errors: result.array() });
}






function checkValidationTest(req, res, next){
    const result = body.validationResult(req);
    if (result.isEmpty()) {
        return next();
    }

    res.status(422).json({ errors: result.array() });
}


 

module.exports = router;
