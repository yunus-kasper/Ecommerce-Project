// ForgotPassword.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axiosInstance.post("/auth/forgot-password", { email });
    console.log("✅ Response from backend:", res.data);
    toast.success(res.data.message);
    setEmail("");
  } catch (err) {
    console.error("❌ Error sending forgot password:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Something went wrong.");
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
