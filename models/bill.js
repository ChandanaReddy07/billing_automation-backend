const mongoose = require('mongoose');
const { Schema } = mongoose;

const billingSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    billingCycleStartDate: {
        type: Date,
        required: true
    },
    billingCycleEndDate: {
        type: Date,
        required: true
    },
    usage: {
        createdTasks: { type: Number, default: 0 },
        updatedTasks: { type: Number, default: 0 },
        deletedTasks: { type: Number, default: 0 }
    },
    cumulativeUsage: {
        type: Number,
        default: 0
    },
    currentBillingAmount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
