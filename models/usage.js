const mongoose = require('mongoose');
const { Schema } = mongoose;

const usageSchema = new Schema({
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    actionCounts: {
        created: { type: Number, default: 0 },
        updated: { type: Number, default: 0 },
        deleted: { type: Number, default: 0 }
    }
}, { timestamps: true });

const Usage = mongoose.model('Usage', usageSchema);

module.exports = Usage;
