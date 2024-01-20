module.exports = {
  // fetch customer data from table
  add_registration_data_ot_table({mobile, name, age, gender, doctor_id, doctor_name, tests, total_payment, 
  discount_type, discount_value, final_payment, payment_status, payment_mode, paid_amount}) {
    return `INSERT INTO registrations (name, age, mobile, gender, doctor_id, doctor_name, tests, total_payment, discount_type, final_payment, payment_status, payment_mode, paid_amount, discount_value)
    VALUES ('${name}', ${age}, ${mobile}, '${gender}', ${doctor_id}, '${doctor_name}', '${tests}', ${total_payment}, '${discount_type}', ${final_payment}, '${payment_status}', '${payment_mode}', ${paid_amount}, '${discount_value}');`;
  },
};
