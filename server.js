const { selectAllPersons } = require('./src/services/dbOperations');
const config = require('./src/services/dbConfig');

config.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Successful!');
    selectAllPersons(config);
  }
});
