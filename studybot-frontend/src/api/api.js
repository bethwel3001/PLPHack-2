import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const askQuestion = async (question, subject = 'general') => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask`, { question, subject });
    return response.data.answer;
  } catch (error) {
    console.error('Error asking question:', error);
    throw error;
  }
};
