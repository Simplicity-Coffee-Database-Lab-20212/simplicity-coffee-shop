const mysql = require('mysql');

const config = mysql.createConnection({
  host: '37.59.55.185',
  user: '9qGuH1yAkW',
  password: 'Jpje0mbY0u',
  port: 3306,
  database: '9qGuH1yAkW',
});

// const config = mysql.createConnection({
//   host: '37.59.55.185',
//   user: 'ptbID8hnJu',
//   password: 'NoWnWCoTyp',
//   port: 3306,
//   database: 'ptbID8hnJu',
// });

module.exports = config;
