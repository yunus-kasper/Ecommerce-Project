import axiosInstance from "../api/axiosInstance";

export const registerUser = async (formData) => {
  try {
    const res = await axiosInstance.post("/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post("/auth/login", { email, password });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};