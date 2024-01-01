const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  issueDate: Date,
  dueDate: Date,
  totalAmount: Number,
  items: [{
    description: String,
    amount: Number
  }]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
