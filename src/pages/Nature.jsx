import { useEffect, useState } from "react";
import art1 from "../assets/Nature1.png";
import art2 from "../assets/Nature2.png";
import art3 from "../assets/Nature3.png";
import art4 from "../assets/Nature4.png";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useLocation } from "react-router";

const natures = [
  {
    title: "Birds on Branch Metal Wall Decor, Metal Birds Wall Art, Bird..",
    price: "₹1,999",
    img: art1,
    category: "forest",
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
    title: "Bird Metal Wall Art",
    price: "₹5,969",
    img: art2,
    category: "forest",
    date: "2024-06-16",
    rating: 4.8,
    colorName: "black",
    colorCode: "bg-[#000]",
    decoreType: "Home Decore",
    discount: "₹5,999",
    discountPercent: "68% off",
    customerRated: "(30,060)",
    deliverBy: "Delivery by Tomorrow",
  },
  {
    title: "Two Tall Trees Metal Wall Art | Spruce Metal Sign | Two Trees....",
    price: "₹5,899",
    img: art3,
    category: "forest",
    date: "2024-06-24",
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
    title: "Metal Moose Wall Decor, Deer Family Metal Wall Art, Tree....  ",
    price: "₹5,299",
    img: art4,
    category: "animal",
    date: "2024-06-23",
    rating: 4.4,
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
  { name: "Forest Scenes", category: "forest" },
  {
    name: "Birds & Butterflies",
    category: "birds",
  },
  {
    name: "Animal Silhouettes (Lion, Elephant, Deer, Owl, Horse)",
    category: "animal",
  },
  { name: "Sea Life (Dolphins, Whale, Fish)", category: "aquatic" },
  { name: "Mountain Landscapes", category: "mountain" },
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

function Nature() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState(natures);
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

  const filterNatures = items.filter((val) =>
    val.category.toLowerCase().includes(param)
  );

  const filteredNatures = filterNatures.filter((val) =>
    val.colorName.includes(color)
  );

  return (
    <>
      <Navbar />
      <Breadcrumbs title="Nature & Wildlife" />
      <section className="lg:px-20 md:px-[60px] px-4 py-[23px]">
        <Filter text="Nature & Wildlife" sort={sort} />
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
          <FilterCard cardData={filteredNatures} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Nature;
