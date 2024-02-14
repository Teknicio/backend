module.exports = {
  // fetch customer data from table
  get_pending_report() {
    return `SELECT * FROM registrations WHERE uploaded='${0}';`;  
  }
};
