const { selectAllPersonsQuery } = require('../../src/constants/query');

const selectAllPersons = (config) => {
  config.query(selectAllPersonsQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};

module.exports = {
  selectAllPersons,
};
