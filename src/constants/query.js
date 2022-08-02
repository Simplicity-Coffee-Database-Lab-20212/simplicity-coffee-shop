const selectAllCustomerQuery = `SELECT * FROM Customer`;
const selectAllIngredientQuery = `SELECT * FROM Ingredient`;
const selectAllProductQuery = `SELECT * FROM Product`;
const selectAllEmployeeQuery = `SELECT * FROM Employee`;
const selectAllOrderQuery = `SELECT * FROM Ordering`;
const selectAllSupplierQuery = `SELECT * FROM Supplier`;
const selectAllSupplyQuery = `SELECT * FROM Supply`;
const selectAllMadeQuery = `SELECT * FROM Made`;
const selectAllConsistQuery = `SELECT * FROM Consist`;

const deleteSupplierQuery = `DELETE FROM Supplier WHERE SupplierID =`;
const deleteIngredientQuery = `DELETE FROM Ingredient WHERE IngredientID =`;
const deleteProductQuery = `DELETE FROM Product WHERE ProductID =`;
const deleteEmployeeQuery = `DELETE FROM Employee WHERE EmployeeID =`;
const deleteCustomerQuery = `DELETE FROM Customer WHERE CustomerID =`;
const deleteConsistQuery = `DELETE FROM Consist WHERE ConsistID =`;
const deleteMadeQuery = `DELETE FROM Made WHERE MadeID =`;
const deleteOrderQuery = `DELETE FROM Ordering WHERE OrderingID =`;
const deleteSupplyQuery = `DELETE FROM Supply WHERE SupplyID =`;

module.exports = {
  selectAllCustomerQuery,
  selectAllIngredientQuery,
  selectAllProductQuery,
  selectAllEmployeeQuery,
  selectAllOrderQuery,
  selectAllSupplierQuery,
  selectAllSupplyQuery,
  selectAllMadeQuery,
  selectAllConsistQuery,
  deleteSupplierQuery,
  deleteIngredientQuery,
  deleteProductQuery,
  deleteEmployeeQuery,
  deleteCustomerQuery,
  deleteConsistQuery,
  deleteMadeQuery,
  deleteOrderQuery,
  deleteSupplyQuery,
};
