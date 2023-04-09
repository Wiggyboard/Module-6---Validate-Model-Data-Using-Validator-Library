const mongoose = require('mongoose');

const loanSchema  = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    loanType: String,
    loanNumber: Number,
    amount: Number,
    interestRate: Number,
    loanTerm: Number,
    startDate: Date,
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
    isDeleted: Boolean
  });

const Loan = mongoose.model('Loan', loanSchema, "LOANS");

module.exports = Loan;