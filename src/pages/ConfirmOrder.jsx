import React from "react";
import { CheckCircle, Truck, Clock, ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import {useSelector} from "react-redux"

function ConfirmOrder() {
  const navigate = useNavigate();
  const { state: orderDetails } = useLocation();
  const { selectedAddress, defaultAddress } = useSelector(
    (state) => state.address
  );

  const finalAddress = selectedAddress || defaultAddress;

  // Sample order data - in a real app, this would come from props or state
  // const orderDetails = {
  //   orderId: "#ORD-123456",
  //   deliveryDate: "Wed, May 29, 2025",
  //   deliveryAddress: "123 Main St, Apartment 4B, New York, NY 10001",
  //   items: [
  //     { name: "Wireless Headphones", quantity: 1, price: 99.99 },
  //     { name: "Phone Case", quantity: 2, price: 15.99 },
  //   ],
  //   total: 131.97,
  // };
  console.log(finalAddress);

  return (
    <section className="h-dvh p-4 md:p-8 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 max-w-5xl m-auto">
        {/* Success confirmation */}
        <div className="flex flex-col items-center text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Thank You for Your Order!
          </h1>
          <p className="text-gray-600 mb-4">
            Your order has been placed successfully.
          </p>
          <p className="text-gray-500">
            Order ID:{" "}
            <span className="font-semibold">{orderDetails.orderId}</span>
          </p>
        </div>

        {/* Delivery information */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <Truck className="w-6 h-6 text-[#ecc100] mt-1" />
            <div>
              <h2 className="font-semibold text-lg mb-1">
                Delivery Information
              </h2>
              <p className="text-gray-600">
                Expected delivery:{" "}
                <span className="font-medium">{orderDetails.deliveryDate}</span>
              </p>
              <p className="text-gray-600 mt-2">
                Shipping to: {finalAddress.street}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-500 mt-1" />
            <div>
              <h2 className="font-semibold text-lg mb-1">Order Status</h2>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-gray-600">Confirmed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Order Summary
          </h2>
          <div className="space-y-3 mb-4">
            {orderDetails.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between pb-2"
              >
                <span className="text-gray-600">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">₹{item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-lg">
              ₹{orderDetails.total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/orders")}
            className="flex-1 bg-[#ecc100] hover:bg-[#ebb100] text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            View Order Details
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmOrder;
