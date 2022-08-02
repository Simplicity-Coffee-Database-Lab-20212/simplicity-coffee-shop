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
  deleteSupplierQuery,
  deleteIngredientQuery,
  deleteProductQuery,
  deleteCustomerQuery,
  deleteEmployeeQuery,
  deleteConsistQuery,
  deleteMadeQuery,
  deleteOrderQuery,
  deleteSupplyQuery,
  insertCustomerQuery,
  insertEmployeeQuery,
  insertProductQuery,
  insertIngredientQuery,
  insertSupplierQuery,
  insertOrderQuery,
  insertSupplyQuery,
  insertMadeQuery,
  insertConsistQuery,
} = require('../../src/constants/query');

const config = require('./dbConfig');

const selectAllCustomer = (res, config) => {
  config.query(selectAllCustomerQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllSupplier = (res) => {
  config.query(selectAllSupplierQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllEmployee = (res) => {
  config.query(selectAllEmployeeQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllIngredient = (res) => {
  config.query(selectAllIngredientQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllOrder = (res) => {
  config.query(selectAllOrderQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllProduct = (res) => {
  config.query(selectAllProductQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllSupply = (res) => {
  config.query(selectAllSupplyQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllMade = (res) => {
  config.query(selectAllMadeQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const selectAllConsist = (res) => {
  config.query(selectAllConsistQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteSupplier = (res, id) => {
  config.query(`${deleteSupplierQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteIngredient = (res, id) => {
  config.query(`${deleteIngredientQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteProduct = (res, id) => {
  config.query(`${deleteProductQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteEmployee = (res, id) => {
  config.query(`${deleteEmployeeQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteCustomer = (res, id) => {
  config.query(`${deleteCustomerQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteConsist = (res, id) => {
  config.query(`${deleteConsistQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteMade = (res, id) => {
  config.query(`${deleteMadeQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteOrder = (res, id) => {
  config.query(`${deleteOrderQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const deleteSupply = (res, id) => {
  config.query(`${deleteSupplyQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
};

const insertCustomer = (res, id) => {};

const insertSupplier = (res, id) => {};

const insertEmployee = (res, id) => {};

const insertIngredient = (res, id) => {};

const insertProduct = (res, id) => {};

const insertOrder = (res, id) => {};

const insertMade = (res, id) => {};

const insertConsist = (res, id) => {};

const insertSupply = (res, id) => {};

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
  deleteSupplier,
  deleteIngredient,
  deleteEmployee,
  deleteProduct,
  deleteCustomer,
  deleteConsist,
  deleteMade,
  deleteOrder,
  deleteSupply,
  insertCustomer,
  insertEmployee,
  insertProduct,
  insertIngredient,
  insertSupplier,
  insertOrder,
  insertSupply,
  insertMade,
  insertConsist,
};
