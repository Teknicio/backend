module.exports = {
  // fetch customer data from table
 update_report_status({id,filename}) {
    return `UPDATE registrations SET uploaded = '1', uploadedfile = '${filename}' WHERE id = '${id}';`;  
  }
};
