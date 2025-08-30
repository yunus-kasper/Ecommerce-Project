import React, { useEffect, useState } from "react";
import PriceDetails from "../components/PriceDetails";
import Button from "../components/Button";
import {
  LocateFixed,
  House,
  Building2,
  Trash2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { selectAddress } from "../redux/cart/addressSlice"; // 🔥 Redux action for global use

function Delivery() {
  const { cartItems, totalPrice, totalItems, totalDiscount } = useSelector(
    (s) => s.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    mobile: "",
    email: "",
    pincode: "",
    street: "",
    city: "",
    state: "",
    addressType: "",
    saveForFuture: false,
  });

  const [savedAddresses, setSavedAddresses] = useState(() => {
    const stored = localStorage.getItem("savedAddresses");
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Select an existing saved address
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setFormData(address);
    setIsSaved(true);

    dispatch(selectAddress(address));
  };

  // Save new address
  const handleSave = (e) => {
    e.preventDefault();
    try {
      // Create unique id
      const newAddress = {
        ...formData,
        id: Date.now().toString(),
        isDefault: formData.saveForFuture, // mark default if checked
      };

      // Avoid duplicate (by checking pincode + street + mobile)
      const exists = savedAddresses.some(
        (addr) =>
          addr.street === newAddress.street &&
          addr.pincode === newAddress.pincode &&
          addr.mobile === newAddress.mobile
      );
      if (exists) {
        toast.error("This address already exists");
        return;
      }

      const updated = [...savedAddresses, newAddress];
      localStorage.setItem("savedAddresses", JSON.stringify(updated));
      setSavedAddresses(updated);
      setSelectedAddress(newAddress);
      setIsSaved(true);

      // Save globally in Redux
      dispatch(selectAddress(newAddress));

      toast.success("Address Added Successfully");
      setFormData({
        id: "",
        fullName: "",
        mobile: "",
        email: "",
        pincode: "",
        street: "",
        city: "",
        state: "",
        addressType: "",
        saveForFuture: false,
      });
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    }
  };

  // Proceed to payment
  const goToPayment = (e) => {
    e.preventDefault();
    if (!selectedAddress) {
      toast.error("Please select an address before proceeding");
      return;
    }
    navigate("/checkout/payment");
  };

  // Check if form is fully filled (used to enable SAVE)
  const formFilled =
    formData.fullName &&
    formData.mobile &&
    formData.email &&
    formData.pincode &&
    formData.street &&
    formData.city &&
    formData.state &&
    formData.addressType;

  // Only proceed if saved or selected
  const canProceed = selectedAddress || isSaved;

  const handleDeleteAddress = (addressToDelete) => {
    const updated = savedAddresses.filter(
      (addr) => addr.id !== addressToDelete.id
    );
    setSavedAddresses(updated);
    localStorage.setItem("savedAddresses", JSON.stringify(updated));

    if (selectedAddress?.id === addressToDelete.id) {
      setSelectedAddress(null);
      setIsSaved(false);
      dispatch(selectAddress(null));
    }

    toast.success("Address deleted successfully");
  };

  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-[60px] px-4 py-6 sm:py-8 bg-gray-50 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Address Section */}
          <div className="w-full lg:w-2/3 p-6 shadow-sm bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Delivery Address
            </h1>

            {/* Current Location Button */}
            <button className="px-6 py-3 group flex items-center gap-2 mb-6 border border-[#212121] hover:border-black transition-all">
              <LocateFixed
                className="group-hover:text-black transition-colors"
                size={18}
              />
              <span className="font-medium">Use Current Location</span>
            </button>

            {/* Saved Addresses */}
            {savedAddresses.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  Saved Addresses
                </h2>
                <div className="space-y-3">
                  {savedAddresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedAddress?.id === addr.id
                          ? "border-blue-500 bg-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleSelectAddress(addr)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-900">
                              {addr.fullName} • {addr.mobile}
                            </p>
                            {addr.isDefault && (
                              <span className="text-xs px-2 py-0.5 bg-blue-100 rounded-full text-blue-700 ml-2">
                                Default
                              </span>
                            )}
                            {addr.addressType && (
                              <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                                {addr.addressType}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600">
                            {addr.street}, {addr.city}, {addr.state} -{" "}
                            {addr.pincode}
                          </p>
                          {addr.email && (
                            <p className="text-sm text-gray-500">
                              {addr.email}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 rounded-full hover:bg-red-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteAddress(addr);
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Address Form */}
            <form
              className="mt-6 space-y-5"
              onSubmit={canProceed ? goToPayment : handleSave}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mobile Number*
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pincode*
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Street Address*
                </label>
                <textarea
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  placeholder="House number, street, area"
                  rows={3}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City*
                  </label>
                  <input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State*
                  </label>
                  <input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
                  />
                </div>
              </div>

              {/* Address Type */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Address Type
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "Home", icon: <House size={16} /> },
                    { value: "Work", icon: <Building2 size={16} /> },
                    { value: "Other", icon: <MapPin size={16} /> },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          addressType: type.value,
                        }))
                      }
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                        formData.addressType === type.value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 hover:border-gray-400 text-gray-700"
                      }`}
                    >
                      {type.icon}
                      {type.value}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save for future */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="saveForFuture"
                  name="saveForFuture"
                  checked={formData.saveForFuture}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
                />
                <label htmlFor="saveForFuture" className="text-gray-700">
                  Save this address for future use
                </label>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 flex-1 border border-black text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setFormData({
                      id: "",
                      fullName: "",
                      mobile: "",
                      email: "",
                      pincode: "",
                      street: "",
                      city: "",
                      state: "",
                      addressType: "",
                      saveForFuture: false,
                    });
                    setIsSaved(false);
                    setSelectedAddress(null);
                    dispatch(selectAddress(null));
                  }}
                >
                  Cancel
                </button>

                {canProceed ? (
                  <button
                    type="submit"
                    className="px-6 group py-3 flex justify-center items-center flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-sm"
                  >
                    Continue to Payment
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`px-6 py-3 flex justify-center items-center flex-1 font-medium transition-colors ${
                      formFilled
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!formFilled}
                  >
                    Save Address
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Price Details Section */}
          <PriceDetails
            totalItems={totalItems}
            totalDiscount={totalDiscount}
            totalPrice={totalPrice}
            product={cartItems}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Delivery;
