module.exports = {
  // fetch customer data from table
  update_payment({payment, reportid}) {
    return `UPDATE registrations SET paid_amount='${payment}', payment_status='full' WHERE id='${reportid}';`;  
  }
};
