const {
  selectAllCustomerQuery,
  selectAllEmployeeQuery,
  selectAllIngredientQuery,
  selectAllOrderQuery,
  selectAllProductQuery,
  selectAllSupplierQuery,
} = require('../../src/constants/query');
const config = require('./dbConfig');

const selectAllCustomer = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllCustomerQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllSupplier = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllSupplierQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllEmployee = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllEmployeeQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllIngredient = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllIngredientQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllOrder = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllOrderQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllProduct = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllProductQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

module.exports = {
  selectAllCustomer,
  selectAllSupplier,
  selectAllEmployee,
  selectAllIngredient,
  selectAllOrder,
  selectAllProduct,
};
