import { BadgeCheck, Info, ShieldCheck } from "lucide-react";
import React from "react";
import { useState } from "react";

function PriceDetails({ totalItems, totalPrice, totalDiscount, product }) {
  const [deliveryCharge, setDeliveryCharge] = useState(60);
  const deliveryLimit = 1000;

  return (
    // <div className="w-full lg:w-[500px] p-2 shadow-md h-max">
    //   <h1 className=" p-2 border-r-0 border-l-0 border-t-0 border border-[#D9D9D9] text-[18px]">
    //     Price Details <span className="text-[14px]">({totalItems} Item)</span>
    //   </h1>
    //   <div className="p-2 flex justify-between">
    //     <span>Total MRP</span>
    //     <span>Rs. {(totalPrice).toFixed(2)}</span>
    //   </div>
    //   <div className="p-2 flex justify-between">
    //     <span>Discount</span>
    //     <span>-Rs. {(totalDiscount).toFixed(2)}</span>
    //   </div>
    //   <div className="p-2 flex justify-between">
    //     <span>Platform Fee</span>
    //     <span>Rs. 6</span>
    //   </div>
    //   <div className="p-2 flex justify-between border-t-0 border-r-0 border-l-0 border border-[#d9d9d9]">
    //     <span>Delivery Charges</span>
    //     {totalPrice > 1000 ? (
    //       <span className="line-through text-[#2E7D32]">Rs. 60</span>
    //     ) : (
    //       <span className="">Rs. 60</span>
    //     )}
    //   </div>
    //   <div className="p-2 flex justify-between">
    //     <span>Total Amount</span>
    //     <span>Rs. {(totalPrice - totalDiscount + 6).toFixed(2) }</span>
    //   </div>
    // </div>

    // <div className="w-full lg:w-1/3">
    //   <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-6">
    //       Price Details
    //     </h2>

    //     <div className="space-y-4">
    //       <div className="flex justify-between">
    //         <span className="text-gray-600">Price ({totalItems} items)</span>
    //         <span>₹{totalPrice.toFixed(2)}</span>
    //       </div>
    //       <div className="flex justify-between">
    //         <span className="text-gray-600">Discount</span>
    //         <span className="text-green-600">-₹{totalDiscount.toFixed(2)}</span>
    //       </div>
    //       <div className="flex justify-between">
    //         <span className="text-gray-600">Platform Fee</span>
    //         <span>{`₹6.00`}</span>
    //       </div>
    //       <div className="flex justify-between">
    //         <span className="text-gray-600">Delivery Charges</span>
    //         <span className={totalPrice > 1000 ? "" : "text-green-600"}>
    //           {totalPrice > 1000 ? `₹${deliveryCharge.toFixed(2)}` : "FREE"}
    //         </span>
    //       </div>

    //       <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium">
    //         <span>Total Amount</span>
    //         <span>
    //           ₹{(totalPrice - totalDiscount + deliveryCharge + 6).toFixed(2)}
    //         </span>
    //       </div>
    //     </div>

    //     <div className="mt-6 text-green-600 text-sm">
    //       You will save ₹{totalDiscount.toFixed(2)} on this order
    //     </div>
    //   </div>
    // </div>

    <div className="w-full lg:w-1/3">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6 font-inter">
        <>
          <h2 className="text-xl font-medium text-gray-800 mb-6 pb-2 border-b border-gray-100">
            Price Summary
          </h2>

          <div className="space-y-4">
            {/* Price Breakdown */}
            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">
                Price ({totalItems} {totalItems > 1 ? "items" : "item"})
              </span>
              <span className="font-medium">
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Discount</span>
              <span className="text-green-600 font-medium">
                -₹{totalDiscount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">Platform Fee</span>
              <span className="font-medium">₹6.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 font-medium">
                Delivery Charges
              </span>
              <span
                className={
                  totalPrice - totalDiscount < deliveryLimit
                    ? "font-medium"
                    : "text-green-600 font-medium"
                }
              >
                {totalPrice - totalDiscount < deliveryLimit ? (
                  `₹${deliveryCharge.toFixed(2)}`
                ) : (
                  <span className="flex items-center gap-1">
                    <BadgeCheck className="w-4 h-4" /> FREE
                  </span>
                )}
              </span>
            </div>

            {/* Total Amount */}
            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between text-lg font-medium text-gray-900">
              <span>Total Amount</span>
              <span>
                ₹
                {(
                  totalPrice -
                  totalDiscount +
                  (totalPrice - totalDiscount < deliveryLimit
                    ? deliveryCharge
                    : 0) +
                  6
                ).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {/* Savings Info */}
          <div className="mt-6 p-3 bg-green-50 rounded-lg flex items-start gap-2">
            <Info className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
            <div>
              <p className="text-green-700 font-medium">
                You're saving ₹{totalDiscount.toLocaleString("en-IN")} on this
                order!
              </p>
              {totalPrice <= 1000 && (
                <p className="text-green-600 text-sm mt-1">
                  Free delivery on orders under ₹1000
                </p>
              )}
            </div>
          </div>

          {/* Payment Security */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="text-gray-400" size={16} />
            <span>100% secure payments</span>
          </div>
        </>
      </div>
    </div>
  );
}

export default PriceDetails;
