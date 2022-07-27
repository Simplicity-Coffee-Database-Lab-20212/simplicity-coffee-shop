const express = require('express');
const cors = require('cors');
const {
  selectAllCustomer,
  selectAllEmployee,
  selectAllProduct,
  selectAllIngredient,
  selectAllSupplier,
} = require('./src/services/dbOperations');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/select-all-customers', function (req, res) {
  console.log('Called all customers');
  selectAllCustomer(res);
});

app.post('/select-all-products', function (req, res) {
  console.log('Called all products');
  selectAllProduct(res);
});

app.post('/select-all-ingredients', function (req, res) {
  console.log('Called all ingredients');
  selectAllIngredient(res);
});

app.post('/select-all-employees', function (req, res) {
  console.log('Called all employees');
  selectAllEmployee(res);
});

app.post('/select-all-suppliers', function (req, res) {
  console.log('Called all suppliers');
  selectAllSupplier(res);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
