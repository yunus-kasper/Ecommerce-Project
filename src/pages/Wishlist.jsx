import AccountSidebar from "../components/AccountSidebar";
import { useState } from "react";
import img from "../assets/Art3.jpg";
import { HeartIcon, MenuIcon, ShoppingCart, Trash2, XIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useDispatch, useSelector } from "react-redux";
import OrderSidebar from "../components/sidebars/OrderSidebar";
import { clearWishlist, removeFromWishlist } from "../redux/cart/wishlistSlice";
import { addToCart } from "../redux/cart/cartSlice";
import { Link } from "react-router";

const cart = [
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    price: "₹1,919",
    discount: "₹5,999",
    discountPercent: "68% OFF ",
    image: img,
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    price: "₹1,919",
    discount: "₹5,999",
    discountPercent: "68% OFF ",
    image: img,
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    price: "₹1,919",
    discount: "₹5,999",
    discountPercent: "68% OFF ",
    image: img,
  },
  {
    name: "Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room ...",
    price: "₹1,919",
    discount: "₹5,999",
    discountPercent: "68% OFF ",
    image: img,
  },
];

function Wishlist() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { wishlistItems, totalItems } = useSelector((s) => s.wishlist);
  const dispatch = useDispatch();

  const moveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item));
  };

  const moveAllToCart = (wishlistItems) => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart(item));
    });
    dispatch(clearWishlist());
  };
  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-8 px-4 py-6 sm:py-8 bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between gap-4 font-inter">
          <div className="max-lg:hidden">
            <AccountSidebar />
          </div>

          {/* Wishlist */}
          <div className="w-full bg-white rounded-lg shadow-sm">
            <div className="flex flex-row items-center justify-between p-4 sm:px-6 sm:py-5 border-b border-gray-200">
              <h1 className="text-xl font-medium text-gray-800 ">
                My Wishlist {totalItems > 0 && <span>({totalItems})</span>}
              </h1>
              {totalItems > 0 && (
                <button
                  className="bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 text-sm font-medium transition-colors "
                  onClick={() => dispatch(clearWishlist())}
                >
                  Clear All
                </button>
              )}
            </div>

            {wishlistItems.length === 0 ? (
              <div className="p-8 sm:p-12 text-center">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <HeartIcon className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Save your favorite items here to easily find them later
                </p>
                <Link
                  to="/products"
                  className="inline-block bg-[#ecc100] hover:bg-[#ebb100] text-white rounded-lg px-8 py-3 font-medium transition-colors shadow-sm hover:shadow-lg"
                >
                  Discover Products
                </Link>
              </div>
            ) : (
              <>
                <div className="divide-y divide-gray-100">
                  {wishlistItems?.map((item) => (
                    <div
                      key={`${item.id}-${item.title}`}
                      className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex gap-4 items-start sm:items-center">
                        <Link
                          to={`/product/${item.id}`}
                          className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-white"
                        >
                          <img
                            className="w-full h-full object-contain p-2"
                            src={item.image[0]}
                            alt={item.title}
                            loading="lazy"
                          />
                        </Link>
                        <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-3 w-full">
                          <div className="flex-grow">
                            <Link
                              to={`/product/${item.id}`}
                              className="text-base sm:text-lg font-normal text-gray-800 line-clamp-2"
                            >
                              {item.title}
                            </Link>
                            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span className="text-lg font-medium text-gray-900">
                                ₹
                                {(
                                  item.basePrice -
                                  (item.discountPercent * item.basePrice) / 100
                                ).toLocaleString("en-IN")}
                              </span>
                              {item.discountPercent > 0 && (
                                <>
                                  <span className="text-gray-400 text-sm line-through">
                                    ₹{item.basePrice}
                                  </span>
                                  <span className="text-green-600 text-xs bg-green-50 px-2 py-0.5 rounded">
                                    {item.discountPercent}% OFF
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              className="bg-[#212121] text-white px-4 py-2 text-sm border border-[#212121] font-medium transition-colors whitespace-nowrap shadow-sm hover:shadow-sm"
                              onClick={() => moveToCart(item)}
                            >
                              Add to Cart
                            </button>
                            <button
                              className="px-4 py-2 flex items-center text-sm border border-[#212121] gap-2"
                              onClick={() => dispatch(removeFromWishlist(item))}
                              aria-label="Remove item"
                            >
                              Remove <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalItems > 1 && (
                  <div className="p-4 sm:p-5 border-t border-gray-200 flex justify-end">
                    <button
                      className="flex gap-2 items-center bg-[#212121] text-white px-6 py-3 text-sm font-medium transition-colors shadow-sm hover:shadow-sm w-full sm:w-auto text-center"
                      onClick={() => moveAllToCart(wishlistItems)}
                    >
                      Move All <ShoppingCart size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Wishlist;
