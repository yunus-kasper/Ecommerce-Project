// Import icons from lucide-react
import {
  UserRound,
  List,
  Package,
  Heart,
  MapPinHouse,
  Headset,
  Truck,
  Star,
  LogOut,
  LogIn,
  ChevronRight,
} from "lucide-react";

// Core dependencies
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";

// Components
import Modal from "./Modal";
import Logout from "../pages/Logout";
import LogoutModalContent from "./LogoutModalContent";

// Redux: Fix the import path to match your actual folder structure
import { clearCart } from "../redux/cart/cartSlice"; // ✅ Ensure clearCart is correctly exported in cartSlice

// Account Menu Items
const accountDetails = [
  { listName: "Account Details", listIcon: List, path: "/details" },
  { listName: "My Orders", listIcon: Package, path: "/orderhistory" },
  { listName: "Wishlist", listIcon: Heart, path: "/wishlist" },
  { listName: "Manage Addresses", listIcon: MapPinHouse, path: "/addresses" },
  { listName: "Support & Help", listIcon: Headset, path: "/support" },
  { listName: "Order Tracking", listIcon: Truck, path: "/order_tracking" },
  { listName: "Rating & Reviews", listIcon: Star, path: "/orderhistory" },
];

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isLoggedIn = !!token;

  // Logout Logic
  const handleLogout = () => {
    if (!token) {
      toast.info("You're already logged out.");
      return;
    }

    // Clear local storage and Redux cart state
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("loggedInUser");

    dispatch(clearCart()); // ✅ Clear cart in Redux
    toast.success("Logged out successfully");

    setToken(null); // trigger rerender
    navigate("/"); // redirect to home
  };

  // Refresh token on mount
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Hide logout modal when navigating to another route
  useEffect(() => {
    setShowLogoutModal(false);
  }, [location]);

  return (
    <div className="h-max md:w-[413px] sm:w-[350px] w-[280px] p-6 overflow-hidden mx-auto my-10 rounded-xl shadow-lg bg-white z-50 border border-gray-100">
      {/* Top section: user icon and welcome message */}
      <div className="flex gap-4 items-center pb-6 border-b border-gray-200">
        <div className="relative group">
          <UserRound
            size={52}
            strokeWidth={1.5}
            fill={isLoggedIn ? "#CBA11A" : "#9CA3AF"}
            className="p-3 rounded-full bg-gray-100 border-2 border-gray-200 group-hover:border-yellow-400 transition-colors duration-200"
          />
          {isLoggedIn && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
          )}
        </div>
        <div>
          <h1 className="text-gray-900 font-medium text-lg">
            Welcome,{" "}
            <span className={isLoggedIn ? "text-yellow-600" : "text-gray-500"}>
              {isLoggedIn ? "LaserCut" : "Guest"}
            </span>
          </h1>
          {isLoggedIn ? (
            <p className="text-xs text-gray-500">Premium Member</p>
          ) : (
            <p className="text-xs text-gray-500">Sign in for full access</p>
          )}
        </div>
      </div>

      {/* List of Account Sections */}
      <div className="py-2">
        {accountDetails.map(({ listName, listIcon: Icon, path }) => (
          <Link
            to={path}
            key={listName}
            className="flex items-center gap-4 p-3 my-1 rounded-lg hover:bg-yellow-50 transition-colors duration-200 group"
          >
            <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-yellow-100 transition-colors duration-200">
              <Icon className="w-5 h-5 text-gray-600 group-hover:text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-gray-800 font-medium text-sm">{listName}</h2>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        ))}
      </div>

      {/* Log In / Log Out */}
      <div className="pt-4 border-t border-gray-200">
        {isLoggedIn ? (
          <>
            {/* Logout Button */}
            <div
              className="flex items-center gap-4 p-3 my-1 rounded-lg hover:bg-red-50 cursor-pointer transition-colors duration-200 group"
              onClick={() => setShowLogoutModal(true)}
            >
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-red-100 transition-colors duration-200">
                <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-gray-800 font-medium text-sm">Log Out</h2>
              </div>
            </div>

            {/* Logout Modal */}
            {showLogoutModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 backdrop-blur-sm">
                <div
                  className="bg-white p-6 rounded-xl max-w-md w-full relative shadow-xl animate-fade-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <Logout
                    onCancel={() => setShowLogoutModal(false)}
                    onConfirm={() => {
                      handleLogout();
                      setShowLogoutModal(false);
                    }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          // Login Link
          <Link
            to="/login"
            className="flex items-center gap-4 p-3 my-1 rounded-lg hover:bg-yellow-50 transition-colors duration-200 group"
          >
            <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-yellow-100 transition-colors duration-200">
              <LogIn className="w-5 h-5 text-gray-600 group-hover:text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-yellow-600 font-medium text-sm">Log In</h2>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
