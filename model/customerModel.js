const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
    enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    message: 'State must be valid'
  },
  zip: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length == 5,
      message: 'Zip code must be 5 digits'
    }
  }
});


const customerSchema  = new mongoose.Schema({
    name: String,
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= Date.now(),
        message: 'Date of birth must be in the past'
      }
    },
    gender: String,
    address: addressSchema,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
        message: 'Invalid email address'
      }
    },
    loanAmount: {
      type: Number,
      required: true,
      min: [100, 'Loan amount must be at least $100'],
      max: [999999, 'Loan amount must not exceed $999,999']
    },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
    isDeleted: Boolean
  });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;