const express = require('express');
const router = express.Router();
const Usage = require('../models/usage'); // Adjust the path to your Usage model

// POST endpoint to update user action counts
router.post('/updateUsage', async (req, res) => {
    const { emailId, action } = req.body;

    if (!emailId || !action) {
        return res.status(400).json({ message: "Missing userEmail or action" });
    }

    try {
        const update = { $inc: {} };
        update.$inc[`actionCounts.${action}`] = 1;

        const options = { upsert: true, new: true };
        const updatedUsage = await Usage.findOneAndUpdate({ emailId }, update, options);

        res.status(200).json({ message: 'Usage updated successfully', updatedUsage });
    } catch (error) {
        console.error('Error updating usage:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
