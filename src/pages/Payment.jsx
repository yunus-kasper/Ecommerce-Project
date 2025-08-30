import React, { useState } from "react";
import PriceDetails from "../components/PriceDetails";
import Button from "../components/Button";
import upi from "../assets/upi.png";
import googlePay from "../assets/googlePay.svg";
import phonePe from "../assets/phonepe.svg";
import paytm from "../assets/paytm.svg";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Payment() {
  const { cartItems, totalPrice, totalItems, totalDiscount } = useSelector(
    (s) => s.cart
  );

  const navigate = useNavigate();

  // State for selected payment method
  const [selected, setSelected] = useState("upi");

  function generateOrderId() {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `#ORD-${datePart}-${randomPart}`;
  }

  const address = localStorage.getItem("stored")

  function handlePayment() {
    const orderId = generateOrderId();

    // Example: delivery in 5 days
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const deliveryDateFormatted = deliveryDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Get cart data from Redux
    const items = cartItems.map((item) => ({
      name: item.title,
      quantity: item.quantity || 1,
      price: item.basePrice,
    }));

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderDetails = {
      orderId,
      deliveryDate: deliveryDateFormatted,
      deliveryAddress: "", // Later: get from user address
      items,
      total,
    };

    return orderDetails;
  }

  // Payment methods list
  const paymentOptions = [
    { key: "upi", label: "UPI Payment", icon: upi, type: "image" },
    { key: "card", label: "Credit/Debit/ATM Card", icon: "💳" },
    { key: "netbanking", label: "Net Banking", icon: "🏦" },
    { key: "emi", label: "EMI (Easy Installments)", icon: "🔢" },
    { key: "cod", label: "Cash On Delivery (COD)", icon: "📦" },
  ];

  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-[60px] px-4 py-[40px] bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-2/3 p-6 shadow-sm bg-white rounded-lg flex flex-col gap-4">
            {/* UPI Option - Expanded */}
            <div
              onClick={() => setSelected("upi")}
              className={`p-5 flex gap-4 items-start border-2 rounded-lg cursor-pointer transition-colors ${
                selected === "upi"
                  ? "border-blue-500 bg-blue-500/20"
                  : "border-gray-200 hover:border-blue-500/70 hover:bg-gray-50"
              }`}
            >
              <span
                className={`min-w-5 min-h-5 ${
                  selected === "upi" ? "border-blue-500" : "border-gray-300"
                } border-2 !rounded-full mt-1 bg-white flex items-center justify-center`}
              >
                <span
                  className={`!w-3 !h-3 rounded-full ${
                    selected === "upi" ? "bg-blue-500" : "bg-transparent"
                  }`}
                ></span>
              </span>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-3 items-center">
                  <img className="w-auto h-6" src={upi} alt="UPI Logo" />
                  <span className="font-semibold text-gray-800">
                    UPI Payment
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img className="w-6 h-6" src={googlePay} alt="Google Pay" />
                  <img className="w-6 h-6" src={phonePe} alt="PhonePe" />
                  <img className="w-6 h-6" src={paytm} alt="Paytm" />
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g. name@upi)"
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                    disabled={selected !== "upi"}
                  />
                </div>
              </div>
            </div>

            {/* Other Payment Options */}
            {paymentOptions
              .filter((option) => option.key !== "upi")
              .map((option) => (
                <div
                  key={option.key}
                  onClick={() => setSelected(option.key)}
                  className={`p-4 flex gap-4 items-center border-2 rounded-lg cursor-pointer transition-colors ${
                    selected === option.key
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-gray-200 hover:border-blue-500/70 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                      selected === option.key
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        selected === option.key
                          ? "bg-blue-500"
                          : "bg-transparent"
                      }`}
                    ></span>
                  </span>
                  {option.type === "image" ? (
                    <img src={option.icon} alt={option.label} />
                  ) : (
                    <span className="text-lg">{option.icon}</span>
                  )}
                  <p className="text-gray-700">{option.label}</p>
                </div>
              ))}

            {/* Payment Button */}
            <button
              onClick={() => {
                const orderDetails = handlePayment();
                navigate("/confirmOrder", { state: orderDetails });
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 shadow-md transition-colors"
            >
              Place Order
            </button>
          </div>
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

export default Payment;
