import { useState } from "react";
import art1 from "../assets/Typography1.png";
import art2 from "../assets/Typography2.png";
import art3 from "../assets/Typography3.png";
import art4 from "../assets/Typography4.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";

const typographies = [
  {
    title: "Crescent Moon Shape & Mosque Metal Tabletop Décor",
    price: "₹5,999",
    img: art1,
    category: "moon",
    date: "2024-06-02",
    rating: 4.1,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Crescent Moon Shape Allah Metal Tabletop Décor",
    price: "₹5,699",
    img: art2,
    category: "moontypography",
    date: "2024-06-03",
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
    title: "Modern 3D Kaaba Shareef Metal Wall Artn Metal Wall Clock",
    price: "₹5,899",
    img: art3,
    category: "kaaba",
    date: "2024-06-19",
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
    title: "Shivaji Maharaj Metal Wall Art",
    price: "₹5,799",
    img: art4,
    category: "typography",
    date: "2024-06-17",
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
    title: "Shivaji Maharaj Metal Wall Art",
    price: "₹5,799",
    img: art4,
    category: "typography",
    date: "2024-06-17",
    rating: 4.2,
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
  { name: "Typography", category: "typography" },
  {
    name: "Half Moon",
    category: "moon",
  },
  { name: "Half Moon with Allah", category: "moontypography" },
  { name: "Ayatul Kursi Tulip Shaped", category: "surah" },
  { name: "3D kaaba", category: "kaaba" },
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

function Typography() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(typographies);
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

  const filterTypography = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );

  const filteredTypography = filterTypography.filter((val) =>
    val.colorName.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title="Typography" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Typography" sort={sort} />
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
          <FilterCard cardData={filteredTypography} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Typography;
