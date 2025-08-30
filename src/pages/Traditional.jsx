import { useState } from "react";
import art1 from "../assets/Traditional1.png";
import art2 from "../assets/Traditional2.png";
import art3 from "../assets/Traditional3.png";
import art4 from "../assets/Traditional4.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";

const traditionals = [
  {
    title: "3D Mountain Wall Art",
    price: "₹2,599",
    img: art1,
    category: "lazerarts",
    date: "2024-06-23",
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
    title: "Floral Design Traditional Metal Wall Mirror",
    price: "₹3,999",
    img: art2,
    category: "traditionalmirror",
    date: "2024-06-16",
    rating: 4.7,
    colorName: "golden",
    colorCode: "bg-[#D49A06]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Modern Metal Wall Clock",
    price: "₹4,999",
    img: art3,
    category: "modernclocks",
    date: "2024-06-20",
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
    title: "Adam's Apple Metal Wall Clock 16, Black",
    price: "₹2,499",
    img: art4,
    category: "traditionalclock",
    date: "2024-06-25",
    rating: 4.3,
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
  { name: "Traditional Wall Arts", category: "traditionalarts" },
  {
    name: "3D Lazer Wall Arts",
    category: "lazerarts",
  },
  {
    name: "Traditional Wall Clocks",
    category: "traditionalclocks",
  },
  { name: "Modern Wall Clocks", category: "modernclocks" },
  { name: "Laser Wall Clocks", category: "laserclocks" },
  { name: "Traditional Wall Mirrors", category: "traditionalmirror" },
  { name: "Modern Wall Mirrors", category: "modernmirror" },
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

function Traditional() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(traditionals);
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

  const filterTraditionals = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );
  const filteredTraditionals = filterTraditionals.filter((val) =>
    val.colorName.includes(color)
  );
  return (
    <>
      <Navbar />
      <Breadcrumbs title="Traditional & Abstract" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Traditional & Abstract" sort={sort} />
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
          <FilterCard cardData={filteredTraditionals} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Traditional;
