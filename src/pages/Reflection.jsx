import React from "react";
import reflection1 from "../assets/Reflection1.jpg";
import reflection2 from "../assets/Reflection2.jpg";
import reflection3 from "../assets/Reflection3.jpg";
import reflection4 from "../assets/Reflection4.png";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Footer from "../sections/Footer";
import { useState } from "react";
import { useLocation } from "react-router";

const reflections = [
  {
    title: "Lord Krishna Hindu Deity Metal Wall Art",
    decoreType: "Home Decore",
    price: "₹4,989",
    discount: "₹5,999",
    discountPercent: "68% off",
    img: reflection1,
    category: "lordkrishna",
    date: "2024-06-16",
    rating: 4.5,
    colorName: "black",
    colorCode: "bg-[#000]",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Lord Ganesh Hindu Deity Metal Wall Art",
    decoreType: "Home Decore",
    price: "₹5,919",
    discount: "₹5,999",
    discountPercent: "68% off",
    img: reflection2,
    category: "lordganesha",
    date: "2024-06-05",
    rating: 5,
    colorName: "black",
    colorCode: "bg-[#000]",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Lord Shiva Hindu Deity Metal Wall Art",
    decoreType: "Home Decore",
    price: "₹3,969",
    discount: "₹5,999",
    discountPercent: "68% off",
    img: reflection3,
    category: "lordshiva",
    date: "2024-06-18",
    rating: 4.7,
    colorName: "black",
    colorCode: "bg-[#000]",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Lord Hanuman Hindu Deity Metal Wall Art",
    decoreType: "Home Decore",
    price: "₹8,999",
    discount: "₹5,999",
    discountPercent: "68% off",
    img: reflection4,
    category: "lordhanuman",
    date: "2024-06-15",
    rating: 4.8,
    colorName: "black",
    colorCode: "bg-[#000]",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
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

function Reflection() {
  const [color, setColor] = useState("");
  const [param, setParam] = useState("");
  const [items, setItems] = useState(reflections);
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

      case "high":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) => getNumericPrice(b.price) - getNumericPrice(a.price)
          )
        );
      case "low":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) => getNumericPrice(a.price) - getNumericPrice(b.price)
          )
        );
      case "rating":
        return setItems((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(b.rating).toFixed(2) - parseFloat(a.rating).toFixed(2)
          )
        );
      case "latest":
        return setItems((prev) =>
          [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
        );
    }
  };

  const filteredReflection = items.filter((val) =>
    val.colorName.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title="Reflection Art" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Reflection Art" sort={sort} />
        <div className=" flex lg:gap-6 items-start">
          <div className="sticky top-[75px] ">
            <Categories
              setParam={setParam}
              setColor={setColor}
              val={val}
              colors={colors}
            />
          </div>
          <FilterCard cardData={filteredReflection} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Reflection;
