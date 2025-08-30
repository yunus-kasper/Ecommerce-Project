import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import PriceDetails from "../components/PriceDetails";
import DeliveryDetailsDialog from "../components/DeliveryDetailsDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cart/cartSlice";
import { Link } from "react-router";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";

function Cart() {
  const [open, setOpen] = useState(false);

  const { cartItems, totalPrice, totalItems, totalDiscount } = useSelector(
    (s) => s.cart
  );
  const dispatch = useDispatch();
  const closeDialog = () => setOpen(false);
  const token = localStorage.getItem("token");

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-[60px] py-6 sm:py-8 bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between gap-6 font-inter">
          {/* Main Cart Content */}
          <div
            className={`w-full ${totalItems > 0 ? "lg:w-2/3" : "w-full h-"}`}
          >
            {/* Delivery Address Section */}
            {/* <div className="flex justify-between p-6 items-center bg-white rounded-lg shadow-sm">
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  Delivery to
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  {"Select delivery address"}
                </p>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 text-[#ecc100] border border-gray-300 rounded-md hover:bg-amber-50 transition-colors"
              >
                Change Address
              </button>
            </div> */}

            {/* Cart Items Section */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-800">
                  My Cart ({totalItems})
                </h2>
                {totalItems > 0 && <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 text-sm font-medium transition-colors "
                >
                  Clear All
                </button>}
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Add some items to get started
                  </p>
                  <Link
                    to="/products"
                    className="inline-block bg-[#212121] hover:bg-black text-white rounded-md px-8 py-3 font-medium transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-gray-200">
                    {cartItems?.map((item) => (
                      <div
                        key={`${item.id}-${item.title}`}
                        className="py-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <Link className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border border-gray-200" to={`/product/${item.uuid}`}>
                            <img
                              className="w-full h-full object-contain"
                              src={item.image[0]}
                              alt={item.title}
                            />
                          </Link>
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-medium text-gray-800 line-clamp-2">
                                  {item.title}
                                </h3>
                                {/* <p className="text-sm text-gray-500 mt-1">
                                  Seller:{" "}
                                  <span className="text-gray-600">
                                    RetailNet
                                  </span>
                                </p> */}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                                  <button
                                    onClick={() => dispatch(decreaseQty(item))}
                                    className="text-gray-600 hover:text-[#ecc100]"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="min-w-[20px] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => dispatch(increaseQty(item))}
                                    className="text-gray-600 hover:text-[#ecc100]"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                                <button
                                  className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                                  onClick={() => dispatch(removeFromCart(item))}
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-2">
                              <span className="text-xl font-semibold text-gray-800">
                                ₹
                                {(
                                  (item.basePrice -
                                    (item.discountPercent * item.basePrice) /
                                      100) *
                                  item.quantity
                                ).toFixed(2)}
                              </span>
                              <span className="text-gray-400 text-sm line-through">
                                ₹{(item.basePrice * item.quantity).toFixed(2)}
                              </span>
                              <span className="text-green-600 text-sm bg-green-50 px-2 py-0.5 rounded">
                                Save ₹
                                {(
                                  (item.discountPercent *
                                    item.basePrice *
                                    item.quantity) /
                                  100
                                ).toFixed(2)}
                              </span>
                            </div>

                            <div className="mt-2 text-sm text-gray-500">
                              Delivery by{" "}
                              {item.deliverBy < 2
                                ? "Tomorrow"
                                : `${item.deliverBy} days`}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200 flex justify-end">
                    <Link
                      className="bg-[#212121] hover:bg-black text-white px-8 py-3 font-medium transition-colors"
                      // onClick={handleCheckout}
                      to="/checkout/delivery"
                    >
                      Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Price Summary Section */}
          {totalItems > 0 && (
            <PriceDetails
              totalItems={totalItems}
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
              product={cartItems}
            />
          )}
        </div>

        {/* Delivery Address Modal */}
        {open && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md">
              <DeliveryDetailsDialog onClose={closeDialog} />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Cart;
