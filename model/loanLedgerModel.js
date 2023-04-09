const mongoose = require('mongoose');

const loanLedgerSchema  = new mongoose.Schema({
    paymentAmount: String,
    interest: String,
    principal: String,
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
    isDeleted: Boolean
  });

const LoanLedger = mongoose.model('LoanLedger', loanLedgerSchema, "LOANS");

module.exports = LoanLedger;