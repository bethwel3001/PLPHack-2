require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const subjectPrompts = {
  math: "You're a math expert. Explain concepts step-by-step with examples...",
  physics: "You're a physics professor. Use real-world analogies...",
  chemistry: "You're a chemistry tutor...",
  coding: "You're a senior developer...",
  robotics: "You're a robotics engineer...",
  blockchain: "You're a blockchain specialist...",
  ai: "You're an AI researcher...",
  general: "You're a helpful study assistant..."
};

app.post('/api/ask', async (req, res) => {
  try {
    const { subject, question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const messages = [
      { role: "system", content: subjectPrompts[subject] || subjectPrompts.general },
      { role: "user", content: question }
    ];

   const response = await axios.post(
  'https://api.deepseek.com/v1/chat/completions',
  {
    model: 'deepseek-chat',
    messages,
    temperature: 0.7,
    max_tokens: 1000
  },
  {
    headers: {
      'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      'Content-Type': 'application/json'
    },
    timeout: 15000
  }
);


    const answer = response.data.choices?.[0]?.message?.content || "No answer from DeepSeek.";
    res.json({ answer });

  } catch (error) {
    console.error('DeepSeek API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });

    res.status(500).json({
      error: 'AI service error',
      details: error.response?.data?.error?.message || error.message
    });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
