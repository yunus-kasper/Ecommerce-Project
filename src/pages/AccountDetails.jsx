import React, { useState, useEffect } from "react";
import { BadgeCheck, Calendar, Check } from "lucide-react";
import Button from "../components/Button";
import AccountSidebar from "../components/AccountSidebar";
import axiosInstance from "../api/axiosInstance";
import users from "../data/user";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

function AccountDetails() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   dateOfBirth: "",
  //   gender: "",
  //   alternateMobile: "",
  // });

  // Fetch user data on mount (backend)
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await axiosInstance.get("/users/me", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log(res);

  //       setFormData({
  //         name: res.data.name || "",
  //         email: res.data.email || "",
  //         dateOfBirth: res.data.dateOfBirth || "",
  //         gender: res.data.gender || "",
  //         alternateMobile: res.data.alternateMobile || "",
  //       });
  //     } catch (err) {
  //       console.error("Error fetching user:", err);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleGenderSelect = (gender) => {
  //   setFormData((prev) => ({ ...prev, gender }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("token");
  //     await axiosInstance.put(
  //       "/users/me",
  //       {
  //         name: formData.name,
  //         dateOfBirth: formData.dateOfBirth,
  //         gender: formData.gender,
  //         alternateMobile: formData.alternateMobile,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     alert("Details updated!");
  //   } catch (err) {
  //     console.error("Update error:", err);
  //     alert("Failed to update details.");
  //   }
  // };

  const formData = users[0];

  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-12 px-4 py-8 bg-gray-50 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-4 mx-auto">
          <div className="max-lg:hidden">
            <AccountSidebar />
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden font-inter">
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-xl font-medium text-gray-800">
                Edit Profile Details
              </h1>
              <p className="text-gray-500 mt-1">
                Update your personal information
              </p>
            </div>

            <form className="p-6 space-y-6">
              {/* Email Field */}
              <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Email ID*
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-800 font-medium">
                      {formData.email}
                    </span>
                    <BadgeCheck className="text-white" fill="green" />
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 h-max py-2 text-xs font-medium text-black border border-black transition-colors duration-200"
                >
                  Change
                </button>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  // onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    // onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition appearance-none"
                  />
                </div>
              </div>

              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Gender
                </label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("male")}
                    className={`flex-1 py-3 text-center flex items-center justify-center gap-2 transition-colors duration-200 ${
                      formData.gender === "male"
                        ? "bg-gray-50 text-black font-medium"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    {formData.gender === "male" && (
                      <Check className="w-4 h-4 text-green-600" />
                    )}
                    MALE
                  </button>
                  <div className="w-px bg-gray-300"></div>
                  <button
                    type="button"
                    onClick={() => handleGenderSelect("female")}
                    className={`flex-1 py-3 text-center flex items-center justify-center gap-2 transition-colors duration-200 ${
                      formData.gender === "female"
                        ? "bg-gray-50 text-black font-medium"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {formData.gender === "female" && (
                      <Check className="w-4 h-4 text-yellow-600" />
                    )}
                    FEMALE
                  </button>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="alternateMobile"
                    value={formData.alternateMobile}
                    // onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none transition"
                    placeholder="Enter 10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Please enter a 10-digit mobile number"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-max max-md:py-2 max-sm:px-4 py-3 px-6 bg-[#212121] text-white font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AccountDetails;
