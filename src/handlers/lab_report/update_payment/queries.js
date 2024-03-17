module.exports = {
  // fetch customer data from table
  update_payment({payment}) {
    return `UPDATE registrations SET paid_amount='${payment}', payment_status='full';`;  
  }
};
