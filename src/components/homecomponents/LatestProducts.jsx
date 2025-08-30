import { useEffect, useMemo, useState } from "react";
import products from "../../data/products.json";
import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "../Title";
import Ratings from "../Ratings";
import {
  getProductUrl,
  getCardImage,
  getPrices,
} from "../../utils/homePageUtils";

function LatestProducts() {
  const [temp, setTemp] = useState(250);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const navigate = useNavigate(null);

  // function getRandomItems(products, number) {
  //   const shuffled = [...products].sort(() => 0.5 - Math.random());
  //   return shuffled.slice(0, number);
  // }
  // const randomTen = useMemo(() => getRandomItems(products, 10), [products]);

  const latestProducts = [...products].reverse().slice(0, 6);

  // useEffect(() => {
  // const interval = setInterval(() => {
  //   if (ref.current) {
  //     const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;

  //     if (ref.current.scrollLeft >= maxScroll) {
  //       // reset to start when reached end
  //       ref.current.scrollTo({ left: 0, behavior: "smooth" });
  //     } else {
  //       // scroll forward
  //       ref.current.scrollBy({ left: 210, behavior: "smooth" });
  //     }
  //   }
  // }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  // const slideToEnd = () => {
  //   if (ref.current) {
  //     const card = ref.current.querySelector("#card"); // your Link is wrapping each card
  //     const cardWidth = card?.offsetWidth || 0;
  //     const gap = parseInt(getComputedStyle(ref.current).gap || "0", 10) || 0;

  //     const scrollStep = cardWidth + gap;

  //     const currentScroll = ref.current.scrollLeft;
  //     const nextScroll = currentScroll + scrollStep;

  //     console.log(gap)

  //     ref.current.scrollTo({
  //       left: nextScroll,
  //       behavior: "smooth",
  //     });

  //     // Arrow visibility logic
  //     if (nextScroll > 0) setLeftArrow(true);
  //     if (nextScroll >= ref.current.scrollWidth - ref.current.clientWidth) {
  //       setRightArrow(false);
  //     } else {
  //       setRightArrow(true);
  //     }
  //   }
  // };

  // const slideToStart = () => {
  //   if (ref.current) {
  //     const card = ref.current.querySelector("#card");
  //     const cardWidth = card?.offsetWidth || 0;
  //     const gap = parseInt(getComputedStyle(ref.current).gap || "0", 10) || 0;

  //     const scrollStep = cardWidth + gap;

  //     const currentScroll = ref.current.scrollLeft;
  //     const nextScroll = currentScroll - scrollStep;

  //     ref.current.scrollTo({
  //       left: nextScroll,
  //       behavior: "smooth",
  //     });

  //     // Arrow visibility logic
  //     if (nextScroll <= 0) {
  //       setLeftArrow(false);
  //     } else {
  //       setLeftArrow(true);
  //     }
  //     setRightArrow(true);
  //   }
  // };
  function actualPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
  }
  function totalRating(ratings) {
    return (
      ratings.reduce((total, rating) => total + rating.rating, 0) /
      ratings.length
    );
  }
  return (
    <div className="relative group bg-white px-2 border border-gray-100">
      <div className="flex items-center">
        <Title className="md:items-start px-2">Latest Products</Title>
        <Link
          className="whitespace-nowrap text-blue-900 px-2 text-xs underline cursor-pointer"
          to={`/products/latest-products`}
        >
          explore more
        </Link>
      </div>

      {/* Latest Products */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 relative"
        // ref={ref} //grid-flow-col auto-cols-max
      >
        {latestProducts?.map((p) => {
          const key = p.id || p.uuid || p.SKU;
          const { base, effective, discountPercent, symbol } = getPrices(p);
          const ratingAvg = p?.rating?.average;

          return (
            <Link
              key={key}
              className="bg-white p-4 group/image"
              to={getProductUrl(p)}
            >
              <div className="w-[224px] max-sm:w-40 max-sm:h-40 relative overflow-hidden">
                <img
                  className="w-56 h-56 group-hover/image:scale-110 max-sm:w-40 max-sm:h-40 object-contain rounded flex-shrink-0 transition-all ease-in-out duration-300"
                  src={getCardImage(p)}
                  alt={p.title || p.slug || p.category}
                  loading="lazy"
                />

                {typeof ratingAvg === "number" && (
                  <div className="absolute top-1 right-1 bg-yellow-400 shadow-lg text-gray-700 text-xs font-medium px-2 py-1 rounded-full flex gap-1 items-start">
                    <span>{Number(ratingAvg).toFixed(1)} ★</span>
                  </div>
                )}
              </div>

              <div className="w-56 py-1">
                <h3 className="text-sm font-serif font-normal text-gray-800 line-clamp-1 mb-2 tracking-wide">
                  {p.title}
                </h3>

                <div className="flex items-center">
                  <span className="text-gray-900 font-light tracking-tight">
                    {symbol}
                    {effective.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>

                  {discountPercent > 0 && (
                    <>
                      <span className="text-gray-400 text-xs line-through ml-2 font-light">
                        {symbol}
                        {base.toLocaleString("en-IN")}
                      </span>
                      <span className="text-emerald-600 text-xs font-light ml-2">
                        {discountPercent}% Off
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {/* {leftArrow && (
        <button
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-16 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-all duration-200 group-hover:opacity-100 opacity-0 border border-gray-200"
          onClick={slideToStart}
          aria-label="Previous products"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {rightArrow && (
        <button
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-16 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-all duration-200 group-hover:opacity-100 opacity-0 border border-gray-200"
          onClick={slideToEnd}
          aria-label="Next products"
        >
          <ChevronRight size={20} />
        </button>
      )} */}
    </div>
  );
}

export default LatestProducts;
