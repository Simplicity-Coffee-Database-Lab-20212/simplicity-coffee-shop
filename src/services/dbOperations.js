const {
  selectAllCustomerQuery,
  selectAllEmployeeQuery,
  selectAllIngredientQuery,
  selectAllOrderQuery,
  selectAllProductQuery,
  selectAllSupplierQuery,
  selectAllSupplyQuery,
  selectAllMadeQuery,
  selectAllConsistQuery,
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

const selectAllSupply = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllSupplyQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllMade = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllMadeQuery, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  });
};

const selectAllConsist = (res) => {
  config.connect((error) => {
    if (error) throw error;
    console.log('Successful!');
    config.query(selectAllConsistQuery, (err, data) => {
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
  selectAllSupply,
  selectAllMade,
  selectAllConsist,
};
