// ResetPassword.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(`/auth/reset-password/${token}`, {
        password,
      });
      toast.success(res.data.message);
      setPassword("");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Token expired or invalid.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
