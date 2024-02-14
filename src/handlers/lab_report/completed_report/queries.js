module.exports = {
  // fetch customer data from table
  get_completed_report() {
    return `SELECT * FROM registrations WHERE uploaded='${1}';`;  
  }
};
