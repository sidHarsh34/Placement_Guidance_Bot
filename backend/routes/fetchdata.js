const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const QueAns = require("../models/QueAns");
const ChatHistory = require('../models/ChatHistory');
const { getLoggedInUserId } = require('./login');

dotenv.config();
const router = express.Router();

// Route for fetching chat history for the logged-in user
router.get('/chat/history', async (req, res) => {
    try {
      const userId = getLoggedInUserId();
      // Fetch chat history from the database based on the user ID and sorted by timestamp
      const chatHistory = await ChatHistory.find({ userId }).sort({ timestamp: 1 });
  
      res.json({ conversations: chatHistory });
    } catch (error) {
      console.error('Error fetching chat history:', error);
      res.status(500).json({ error: 'Internal server error occurred' });
    }
  });
  
  module.exports = router;
