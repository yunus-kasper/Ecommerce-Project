// PageRouter.js
import { BrowserRouter, Routes, Route } from "react-router";

// Public Pages
import Home from "../pages/Home";
import Faqs from "../pages/Faqs";
import Policy from "../pages/Policy";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import AccountDetails from "../pages/AccountDetails";
import OrderHistory from "../pages/OrderHistory";
import Wishlist from "../pages/Wishlist";
import Address from "../pages/Address";
import RecentActivity from "../pages/RecentActivity";
import Support from "../pages/Support";
import OrderTracking from "../pages/OrderTracking";
import Festival from "../pages/Festival";
import AddProduct from "../components/admin/AddProduct";
import ProductDetails from "../pages/ProductDetails";
import Delivery from "../pages/Delivery";
import Payment from "../pages/Payment";
import ConfirmOrder from "../pages/ConfirmOrder";
import Reviews from "../pages/Reviews";
import AllReviews from "../pages/AllReviews";
import NewProducts from "../pages/NewProducts";
import TopProducts from "../pages/TopProducts";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/policy" element={<Policy />} />

        {/* App Pages */}
        <Route path="/bag" element={<Cart />} />
        <Route path="/details" element={<AccountDetails />} />
        <Route path="checkout/delivery" element={<Delivery />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addresses" element={<Address />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/recent" element={<RecentActivity />} />
        <Route path="/support" element={<Support />} />
        <Route path="/orderhistory/:orderId" element={<OrderTracking />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/products/:categoryName" element={<Product />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/all-reviews/:uuid" element={<AllReviews />} />
        <Route path="/products/latest-products" element={<NewProducts />} />
        <Route path="/products/top-products" element={<TopProducts />} />
        <Route
          path="/products/:categoryName/:subcategoryName"
          element={<Product />}
        />
        <Route path="/product/:uuid" element={<ProductDetails />} />
        <Route path="/productForm" element={<AddProduct />} />
        <Route path="/checkout/payment" element={<Payment />} />

        {/* Catch-All */}
        <Route path="*" element={<SomethingWentWrong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
