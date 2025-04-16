const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

module.exports = router;
