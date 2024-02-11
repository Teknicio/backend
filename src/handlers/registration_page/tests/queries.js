module.exports = {
  // fetch customer data from table
  fetch_categories() {
    return `SELECT * FROM  category;`;
  },

  fetch_tests(id){
    return `SELECT * FROM  subcategory WHERE id="${id}";`;
  }
};
