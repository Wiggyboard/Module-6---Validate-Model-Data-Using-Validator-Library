const express = require('express');
const loanLedgerController = require('../controllers/loanLedgerController');
const router = express.Router();

router
  .route('/Loans')
  .get(loanLedgerController.getAllLoanLedgers)
  .post(loanLedgerController.createLoanLedger);

router
  .route('/:id')
  .get(loanLedgerController.getLoanLedger)
  .put(loanLedgerController.updateLoanLedger)
  .delete(loanLedgerController.deleteLoanLedger);

module.exports = router;