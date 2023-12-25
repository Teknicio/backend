module.exports = {
  // parse resposne from query
  parse_response(query_data) {
    // if query data available
    if (query_data) {
      // if query data is array
      if (Array.isArray(query_data)) {
        const data = query_data.map((item) => ({ ...item }));
        // if data array length is 0
        if (data.length == 0) {
          return {};
        }
        // if data array is greater than 1
        else if (data.length > 1) {
          return data;
        }
        // if data array is less than 1
        else {
          return data[0];
        }
      }
      // if query data is not array
      else {
        return null;
      }
    }
    // if query data not available
    else {
      return null;
    }
  },
};
