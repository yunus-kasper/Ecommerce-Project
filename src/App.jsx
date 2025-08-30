// App.jsx
import { ToastContainer } from "react-toastify";
import PageRouter from "./Router/PageRouter";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { syncCart } from "./redux/cart/cartSlice";
import Dashboard from "./pages/admin/Dashboard"
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Collection from "./components/homecomponents/Collection";
import CategoryProducts from "./components/homecomponents/CategoryProducts";
import DiwaliProducts from "./components/homecomponents/DiwaliProducts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(syncCart());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <PageRouter />
      {/* <Products /> */}
    </>
  );
}

export default App;
