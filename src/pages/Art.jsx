import { useEffect, useState } from "react";
import art1 from "../assets/Art1.webp";
import art2 from "../assets/Art2.png";
import art3 from "../assets/Art3.jpg";
import art4 from "../assets/Art4.webp";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";

const arts = [
  {
    title: "Lord Krishna Hindu Deity Metal Wall Art",
    price: "₹4,989",
    img: art1,
    category: "lordkrishna",
    date: "2024-06-16",
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
    title: "Lord Ganesh Hindu Deity Metal Wall Art",
    price: "₹5,919",
    img: art2,
    category: "lordganesha",
    date: "2024-06-05",
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
    title: "Lord Shiva Hindu Deity Metal Wall Art",
    price: "₹3,969",
    img: art3,
    category: "lordshiva",
    date: "2024-06-18",
    rating: 4.7,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Lord Hanuman Hindu Deity Metal Wall Art",
    price: "₹8,999",
    img: art4,
    category: "lordhanuman",
    date: "2024-06-15",
    rating: 4.8,
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
  { name: "Lord Ganesha", category: "lordganesha" },
  { name: "Lord Shiva (Natraja/Trishul)", category: "lordshiva" },
  { name: "Buddha", category: "buddhism" },
  { name: "Om Symbol", category: "symbol" },
  { name: "Mandala Art", category: "mandala" },
  { name: "Tree of Life", category: "nature" },
  {
    name: "Islamic Calligraphy (Bismillah, Ayatul Kursi)",
    category: "islamic",
  },
  { name: "Jesus / cross / Angel", category: "christian" },
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

function Art() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(arts);
  const location = useLocation();
  const val = location?.state;

  const getNumericPrice = (str) => {
    return Number(str.replace(/[^\d]/g, ""));
  };

  // sortby
  const sort = (val) => {
    switch (val) {
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
      default:
        return;
    }
  };

  const filterArts = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );

  const filteredArts = filterArts.filter((val) =>
    val.colorName.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title="Spiritual & Religious Art" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Spiritual & Religious Art" sort={sort} />
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
          <FilterCard cardData={filteredArts} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Art;
