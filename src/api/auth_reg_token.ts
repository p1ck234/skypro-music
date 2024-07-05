import axios from "axios";

// URL API
const API_URL = "https://skypro-music-api.skyeng.tech/user";

// Функция для регистрации пользователя
export const postAuthUser = async (userData: {
  email: string;
  password: string;
  username: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/signup/`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

// Функция для входа пользователя
export const postLoginUser = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

// Функция для получения токена
export const postToken = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/token/`, loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get token");
  }
};

// Функция для обновления токена
export const postRefreshToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/token/refresh/`,
      { refresh: refreshToken },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to refresh token");
  }
};
