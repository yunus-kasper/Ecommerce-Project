import React, { useState } from "react";
import products from "../data/products.json";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Filter from "../components/Filter";
import Footer from "../sections/Footer";
import Categories from "../components/Categories";

const newProducts = [...products].reverse();

function NewProducts() {
  const [items, setItems] = useState(newProducts);
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
            const avgB =
              b.reviews && b.reviews.length > 0
                ? b.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  b.reviews.length
                : 0;

            const avgA =
              a.reviews && a.reviews.length > 0
                ? a.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  a.reviews.length
                : 0;

            return avgB - avgA;
          })
        );

      case "latest":
        setItems(newProducts);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs title={"Latest Products"}></Breadcrumbs>
      <section className="lg:px-20 md:px-[60px] px-4 pb-[23px] bg-gray-50">
        <Filter text={"Latest Products"} sort={sort} />

        <div className="flex lg:gap-6 items-start">
          {/* <div className="sticky top-4">
          </div> */}
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : items.length > 0 ? (
            <Card cardData={items} />
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NewProducts;
