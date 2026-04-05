const BroadcastService = require('../services/broadcastService');

exports.createBroadcast = async (req, res) => {
    try {
        const result = await BroadcastService.createBroadcast(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};