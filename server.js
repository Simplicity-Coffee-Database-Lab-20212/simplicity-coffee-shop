const express = require('express');
const cors = require('cors');
const {
  selectAllCustomer,
  selectAllEmployee,
  selectAllProduct,
  selectAllIngredient,
  selectAllSupplier,
  selectAllOrder,
  selectAllSupply,
  selectAllMade,
  selectAllConsist,
  deleteSupplier,
  deleteIngredient,
  deleteProduct,
  deleteEmployee,
  deleteCustomer,
  deleteConsist,
  deleteMade,
  deleteOrder,
  deleteSupply,
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

app.post('/select-all-orders', function (req, res) {
  console.log('Called all customers');
  selectAllOrder(res);
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

app.post('/select-all-supplies', function (req, res) {
  console.log('Called all supplies');
  selectAllSupply(res);
});

app.post('/select-all-made', function (req, res) {
  console.log('Called all made');
  selectAllMade(res);
});

app.post('/select-all-consist', function (req, res) {
  console.log('Called all consist');
  selectAllConsist(res);
});

// DELETE INSTANCE
app.post('/delete-supplier', (req, res) => {
  console.log(req.body.id);
  deleteSupplier(res, req.body.id);
});

app.post('/delete-ingredient', (req, res) => {
  console.log(req.body.id);
  deleteIngredient(res, req.body.id);
});

app.post('/delete-product', (req, res) => {
  console.log(req.body.id);
  deleteProduct(res, req.body.id);
});

app.post('/delete-employee', (req, res) => {
  console.log(req.body.id);
  deleteEmployee(res, req.body.id);
});

app.post('/delete-customer', (req, res) => {
  console.log(req.body.id);
  deleteCustomer(res, req.body.id);
});

app.post('/delete-consist', (req, res) => {
  console.log(req.body.id);
  deleteConsist(res, req.body.id);
});

app.post('/delete-made', (req, res) => {
  console.log(req.body.id);
  deleteMade(res, req.body.id);
});

app.post('/delete-order', (req, res) => {
  console.log(req.body.id);
  deleteOrder(res, req.body.id);
});

app.post('/delete-supply', (req, res) => {
  console.log(req.body.id);
  deleteSupply(res, req.body.id);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
