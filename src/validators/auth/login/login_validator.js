/**
 * @description method to validate input paylaod
 * @param {*} input
 * @returns success or error
 */
module.exports.login_validator = async (input) => {
  // define variables
  var errors = {};
  var required = ["partner_referral_code", "user_name", "password"];

  // check if any require key is missing from input payload
  required.map((key) => {
    if (!input.hasOwnProperty(key)) {
      errors[key] = [`${key} is required in the payload.`];
    } else {
      errors[key] = [];
    }
  });

  // check the input payload
  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      // assign the value of key
      const value = String(input[key]).trim();

      // switch case on the basis of key
      switch (key) {
        case "partner_referral_code":
          if (value.length > 255) {
            errors[key].push(
              "Invalid partner_referral_code, Cannot greater than 255 characters."
            );
          } else if (value.length < 1) {
            errors[key].push(
              "Invalid partner_referral_code, Cannot less than 1 character."
            );
          }
          break;
        case "user_name":
          if (value.length > 255) {
            errors[key].push(
              "Invalid user_name, Cannot greater than 255 characters."
            );
          } else if (value.length < 1) {
            errors[key].push(
              "Invalid user_name, Cannot less than 1 character."
            );
          }
          break;
        case "password":
          if (value.length > 255) {
            errors[key].push(
              "Invalid password, Cannot greater than 255 characters."
            );
          } else if (value.length < 1) {
            errors[key].push("Invalid password, Cannot less than 1 character.");
          }
          break;
        default:
          break;
      }
    }
  }

  // check the errors
  for (let key in errors) {
    if (errors.hasOwnProperty(key)) {
      let value = errors[key];
      if (value.length == 0) {
        delete errors[key];
      }
    }
  }

  // return the object
  return errors;
};
