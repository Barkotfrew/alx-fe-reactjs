import axios from 'axios';

const API_URL = 'https://api.github.com';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = token ? { Authorization: `token ${token}` } : {};

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/users`, {
      headers,
      params: { q: query },
    });
    return response.data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
