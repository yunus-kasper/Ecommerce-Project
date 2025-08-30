import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import axiosInstance from "../api/axiosInstance";

import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

import productsData from "../data/products.json";

// colors
const colors = [
  { colorName: "golden", colorCode: "bg-[#D49A06]" },
  { colorName: "black", colorCode: "bg-[#000]" },
  { colorName: "white", colorCode: "bg-[#fff]" },
  { colorName: "silver", colorCode: "bg-[#C0C0C0]" },
];

function Product() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { categoryName, subcategoryName } = useParams();
  const { state } = useLocation();
  const val = state;

  // Fetch / Filter products
  useEffect(() => {
    try {
      setLoading(true);
      setError("");

      let filteredProducts = productsData;

      // Filter by category
      if (categoryName) {
        filteredProducts = filteredProducts.filter(
          (p) => p.category.toLowerCase() === categoryName.toLowerCase()
        );
      }

      // Filter by subcategory
      if (subcategoryName) {
        filteredProducts = filteredProducts.filter(
          (p) =>
            p.subcategory &&
            p.subcategory.toLowerCase() === subcategoryName.toLowerCase()
        );
      }

      setItems(filteredProducts);
    } catch (err) {
      console.error(err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, [categoryName, subcategoryName]);

  // Sorting logic
  const sort = (val) => {
    switch (val) {
      case "high":
        setItems((prev) => [...prev].sort((a, b) => b.basePrice - a.basePrice));
        break;
      case "low":
        setItems((prev) => [...prev].sort((a, b) => a.basePrice - b.basePrice));
        break;
      case "atoz":
        setItems((prev) =>
          [...prev].sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "rating":
        return setItems((prev) =>
          [...prev].sort((a, b) => {
            const avgA =
              a.reviews.reduce((sum, r) => sum + r.rating, 0) /
              a.reviews.length;
            console.log(avgA);
            const avgB =
              b.reviews.reduce((sum, r) => sum + r.rating, 0) /
              b.reviews.length;
            return avgB - avgA;
          })
        );
      case "latest":
        setItems([...items].reverse());
        break;
      default:
        break;
    }
  };

  // Filter by search param (param) and color
  const filterArts = items.filter((p) =>
    p.category.toLowerCase().includes(param)
  );
  const filteredArts = filterArts.filter(
    (p) => !color || p.color?.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title={subcategoryName || categoryName || "Products"} />
      <section className="lg:px-20 md:px-[60px] px-4 pb-[23px] bg-gray-50">
        <Filter
          text={subcategoryName || categoryName || "Products"}
          sort={sort}
        />
        <div className="flex lg:gap-6 items-start">
          <div className="sticky top-4">
            <Categories
              categoryName={categoryName}
              setParam={setParam}
              setColor={setColor}
              val={val}
              colors={colors}
            />
          </div>
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : filteredArts.length > 0 ? (
            <Card cardData={filteredArts} />
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;
