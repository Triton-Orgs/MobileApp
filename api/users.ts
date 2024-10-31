// src/api/users.js
import axios from "axios";

// Define the API endpoint
const API_URL = "http://localhost:3000/api"; // Replace with your API URL

// Fetch users function
export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
