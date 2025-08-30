import { useState } from "react";
import art1 from "../assets/Festival1.png";
import art2 from "../assets/Festival2.jpg";
import art3 from "../assets/Festival3.png";
import art4 from "../assets/Festival4.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";
import { color } from "framer-motion";
import { useEffect } from "react";

const festivals = [
  {
    title: "OM Wall Hanging Sculpture | Vastu | Fengshui | Goodluck,...  ",
    price: "₹5,989",
    img: art1,
    category: "diwali",
    date: "2024-06-15",
    rating: 4.3,
    colorName: "golden",
    colorCode: "bg-[#D49A06]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Jesus on Cross Laser Cut",
    price: "₹5,099",
    img: art2,
    category: "christmas",
    date: "2024-06-18",
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
    title: "Acrylic couple name wall hanging for birthday anniversay.",
    price: "₹5,959",
    img: art3,
    category: "birthday",
    date: "2024-06-21",
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
    title: "Eid Mubarak Sign",
    price: "₹5,919",
    img: art4,
    category: "eid",
    date: "2024-06-24",
    rating: 4.5,
    colorName: "golden",
    colorCode: "bg-[#D49A06]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
];

const filters = [
  { name: "All", category: "all" },
  { name: "Diwali (Diya, Shubh Labh)", category: "diwali" },
  { name: "Eid ( Crescent, Mubarak Signs)", category: "eid" },
  { name: "Christmas (Tree, Reindeer, cross)", category: "christmas" },
  { name: "Birthday Name Boards", category: "birthday" },
  { name: "Wedding Decor (Custom Couple Signs)", category: "wedding" },
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

function Festival() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(festivals);
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
            (a, b) =>
              getNumericPrice(b.price) - getNumericPrice(a.price).toFixed(2)
          )
        );
      default:
        return;
    }
  };
  const filtersFestival = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );
  const filteredFestival = filtersFestival.filter((val) =>
    val.colorName.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title="Festival & Occasion" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Festival & Occasion" sort={sort} />
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
          <FilterCard cardData={filteredFestival} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Festival;
