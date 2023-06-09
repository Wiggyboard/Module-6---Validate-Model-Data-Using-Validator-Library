const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
  .route('/Loans')
  .get(loanController.getAllLoans)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoan)
  .put(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;