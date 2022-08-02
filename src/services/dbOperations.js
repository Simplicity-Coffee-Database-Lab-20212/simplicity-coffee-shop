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
} = require('../../src/constants/query');

const config = require('./dbConfig');

const selectAllCustomer = (res, config) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllCustomerQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllSupplier = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllSupplierQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllEmployee = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllEmployeeQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllIngredient = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllIngredientQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllOrder = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllOrderQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
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
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllSupplyQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllMade = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllMadeQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const selectAllConsist = (res) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(selectAllConsistQuery, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteSupplier = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful!');
  config.query(`${deleteSupplierQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteIngredient = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteIngredientQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteProduct = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteProductQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteEmployee = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteEmployeeQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteCustomer = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteCustomerQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteConsist = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteConsistQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteMade = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteMadeQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteOrder = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteOrderQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
};

const deleteSupply = (res, id) => {
  // config.connect((error) => {
  // if (error) throw error;
  // console.log('Successful');
  config.query(`${deleteSupplyQuery} \'${id}\'`, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
  // });
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
  deleteSupplier,
  deleteIngredient,
  deleteEmployee,
  deleteProduct,
  deleteCustomer,
  deleteConsist,
  deleteMade,
  deleteOrder,
  deleteSupply,
};
