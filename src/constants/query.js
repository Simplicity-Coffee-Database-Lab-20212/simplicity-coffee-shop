const selectAllCustomerQuery = `SELECT * FROM Customer`;
const selectAllIngredientQuery = `SELECT * FROM Ingredient`;
const selectAllProductQuery = `SELECT * FROM Product`;
const selectAllEmployeeQuery = `SELECT * FROM Employee`;
const selectAllOrderQuery = `SELECT * FROM Ordering`;
const selectAllSupplierQuery = `SELECT * FROM Supplier`;

module.exports = {
  selectAllCustomerQuery,
  selectAllIngredientQuery,
  selectAllProductQuery,
  selectAllEmployeeQuery,
  selectAllOrderQuery,
  selectAllSupplierQuery,
};
