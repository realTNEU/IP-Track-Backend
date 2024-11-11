const IPData = require('../models/ipDataModel');

exports.saveIPData = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://ip-track-personal.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const ipData = new IPData(req.body);
        await ipData.save();
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
