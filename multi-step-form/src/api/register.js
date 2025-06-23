import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!BASE_URL) {
  throw new Error('REACT_APP_API_BASE_URL is not defined in .env');
}

export const postRegistration = async (data) => {
  const response = await axios.post(`${BASE_URL}/api/register`, data);
  return response.data;
};
