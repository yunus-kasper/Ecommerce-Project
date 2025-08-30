import { useState } from "react";
import art1 from "../assets/Geometric1.png";
import art2 from "../assets/Geometric2.png";
import art3 from "../assets/Geometric3.png";
import art4 from "../assets/Geometric4.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";

const geometrics = [
  {
    title: "Om Trishool Hindu Deity Metal Wall Art",
    price: "₹5,399",
    img: art1,
    category: "symbol",
    date: "2024-06-24",
    rating: 4.5,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Mountain Range View Wall Decor, Large Line Mountain .... ",
    price: "₹4,999",
    img: art2,
    category: "nature",
    date: "2024-06-14",
    rating: 5,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Om Metal Wall Art",
    price: "₹5,929",
    img: art3,
    category: "symbol",
    date: "2024-06-24",
    rating: 4.2,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "911 Model 992 GT3 RS Angle Metal Car Silhouette Wall Art",
    price: "₹5,679",
    img: art4,
    category: "geometry",
    date: "2024-06-26",
    rating: 4.7,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
];

const filters = [
  { name: "All", category: "all" },
  { name: "Abstract Human Figures", category: "human" },
  { name: "Polygon Animal Heads", category: "animal" },
  { name: "Couple Themes (Love, Together, Mr. & Mrs.)", category: "couple" },
  { name: "Mandala Art", category: "mandala" },
  { name: "Om Symbol", category: "symbol" },
  {
    name: "Sacred Geometry (Flower of Life, Spiral Art)",
    category: "geometry",
  },
];

const colors = [
  {
    colorName: "golden",
    colorCode: "bg-[#D49A06]",
  },
  {
    colorName: "black",
    colorCode: "bg-[#000]",
  },
];

function Geometric() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(geometrics);
  const location = useLocation();
  const val = location?.state;

  const getNumericPrice = (str) => {
    return Number(str.replace(/[^\d]/g, ""));
  };

  const sort = (val) => {
    switch (val) {
      case "atoz":
        return setItems((prev) =>
          [...prev].sort((a, b) => a.title.localeCompare(b.title))
        );
      case "latest":
        return setItems((prev) =>
          [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      case "rating":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(b.rating).toFixed(2) - parseFloat(a.rating).toFixed(2)
          )
        );
      case "low":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
          )
        );
      case "high":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
          )
        );

      default:
        return;
    }
  };

  const filterGeometrics = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );

  const filteredGeometrics = filterGeometrics.filter((val) =>
    val.colorName.includes(color)
  );
  return (
    <>
      <Navbar />
      <Breadcrumbs title="Geometric & Abstract" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Geometric & Abstract" sort={sort} />
        <div className=" flex lg:gap-6 items-start">
          <div className="sticky top-[75px] ">
            <Categories
              filters={filters}
              setParam={setParam}
              setColor={setColor}
              val={val}
              colors={colors}
            />
          </div>
          <FilterCard cardData={filteredGeometrics} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Geometric;
