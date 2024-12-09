import axios from "axios";

axios.defaults.baseURL = "https://e-pharmacy-server.onrender.com";

// Налаштування заголовка авторизації
export const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Очищення заголовка авторизації
export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
