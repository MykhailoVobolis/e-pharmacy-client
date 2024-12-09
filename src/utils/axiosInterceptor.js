import axios from "axios";
import { refreshUser } from "../redux/auth/operations.js";
import { store } from "../redux/store.js";
import { clearTokens } from "../redux/auth/slice.js";

const api = axios.create({
  baseURL: "https://e-pharmacy-server.onrender.com",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Інтерсептор для обробки відповіді
api.interceptors.response.use(
  (response) => response, // Повертаємо відповідь, якщо вона успішна
  async (error) => {
    const originalRequest = error.config;

    // Перевірка на помилку 401 (неавторизований доступ)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Виклик refreshUser для отримання нового токена
        const result = await store.dispatch(refreshUser());

        if (result.payload.accessToken) {
          // Якщо токен оновлений, оновлюємо заголовки і повторюємо запит
          setAuthHeader(result.payload.accessToken);
          originalRequest.headers["Authorization"] = `Bearer ${result.payload.accessToken}`;
          return api(originalRequest); // Повторний запит
        }
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError);
        store.dispatch(clearTokens());
      }
    }

    return Promise.reject(error); // Якщо помилка не 401 або інша проблема - повертаємо її
  }
);

export default api;
