const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router
  .route('/Customers')
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router
  .route('/Customers/:id')
  .get(customerController.getCustomer)
  .put(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;