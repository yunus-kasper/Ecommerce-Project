import { useEffect, useRef, useState } from "react";
import collection1 from "../../assets/Collection1.png";
import collection2 from "../../assets/Collection2.png";
import collection3 from "../../assets/Collection3.png";
import collection4 from "../../assets/Collection4.png";
import collection5 from "../../assets/Collection5.png";
import collection6 from "../../assets/Collection6.jpg";
import collection7 from "../../assets/Collection7.png";
import collection8 from "../../assets/Collection8.png";
import collection9 from "../../assets/Collection9.jpg";
import { motion, useAnimation } from "framer-motion";
import icon from "../../assets/black-star-icon.svg";
import products from "../../data/products.json";
import newProducts from "../../data/newProducts.json";
import Tilt from "react-parallax-tilt";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Title from "../Title";
import { Link } from "react-router";

// const collections = [
//   {
//     name: "Adiyogi Shiv Ji Metal wall Art | Sculpture For Home | ...",
//     price: "₹5,999",
//     discount: "₹2,499",
//     discountPercent: "( 58% )",
//     img: collection1,
//   },
//   {
//     name: "Metal Yada Yada Hi Dharmasya Wall Hanging | Sanskrit written.....",
//     price: "₹3,259",
//     discount: "₹2,499",
//     discountPercent: "( 48% )",
//     img: collection2,
//   },
//   {
//     name: "Shree Ganesh Metal Wall Art | Premium Hindu Deity",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection3,
//   },
//   {
//     name: "Sparkenzy trees of Life Metal wall art Decore | Tree of Life...",
//     price: "₹5,952",
//     discount: "₹3,999",
//     discountPercent: "( 68% )",
//     img: collection4,
//   },
//   {
//     name: "Surah Al Ikhlas | Islamic Wall Decore Metal arts for...",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection5,
//   },
//   {
//     name: "Surah Al Ikhlas | Islamic Wall Decore Metal arts for...",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection6,
//   },
//   {
//     name: "Surah Al Ikhlas | Islamic Wall Decore Metal arts for...",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection7,
//   },
//   {
//     name: "Surah Al Ikhlas | Islamic Wall Decore Metal arts for...",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection8,
//   },
//   {
//     name: "Surah Al Ikhlas | Islamic Wall Decore Metal arts for...",
//     price: "₹5,999",
//     discount: "₹1,949",
//     discountPercent: "( 68% )",
//     img: collection9,
//   },
// ];

const collections = newProducts.filter(
  (item, index, self) =>
    index === self.findIndex((obj) => obj.category === item.category)
);

function Collection() {
  const ref = useRef(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const [temp, setTemp] = useState(270);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const slideToEnd = () => {
    if (ref.current) {
      const card = ref.current.querySelector("a"); // your Link is wrapping each card
      const cardWidth = card?.offsetWidth || 0;
      const gap = parseInt(getComputedStyle(ref.current).gap || "0", 10) || 0;

      const scrollStep = cardWidth + gap;

      const currentScroll = ref.current.scrollLeft;
      const nextScroll = currentScroll + scrollStep;

      ref.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });

      // Arrow visibility logic
      if (nextScroll > 0) setLeftArrow(true);
      if (nextScroll >= ref.current.scrollWidth - ref.current.clientWidth) {
        setRightArrow(false);
      } else {
        setRightArrow(true);
      }
    }
  };

  const slideToStart = () => {
    if (ref.current) {
      const card = ref.current.querySelector("a");
      const cardWidth = card?.offsetWidth || 0;
      const gap = parseInt(getComputedStyle(ref.current).gap || "0", 10) || 0;

      const scrollStep = cardWidth + gap;

      const currentScroll = ref.current.scrollLeft;
      const nextScroll = currentScroll - scrollStep;

      ref.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });

      // Arrow visibility logic
      if (nextScroll <= 0) {
        setLeftArrow(false);
      } else {
        setLeftArrow(true);
      }
      setRightArrow(true);
    }
  };

  function actualPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
  }

  useEffect(() => {
    if (isHovered) return;
    let index = 0;
    const slideInterval = setInterval(() => {
      controls.start({
        x: `-${index * 100}%`,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      index = (index + 1) % 4; // cycle all product images
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [controls, isHovered]);

  //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (ref.current) {
  //       const maxScroll = ref.current.scrollWidth - ref.current.clientWidth;

  //       if (ref.current.scrollLeft >= maxScroll) {
  //         // reset to start when reached end
  //         ref.current.scrollTo({ left: 0, behavior: "smooth" });
  //       } else {
  //         // scroll forward
  //         ref.current.scrollBy({ left: 250, behavior: "smooth" });
  //       }
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const getProductUrl = (p) =>
    `/products/${encodeURIComponent(p?.category)}/${encodeURIComponent(p.subcategory)}`;

  // Pick first suitable image (new JSON → legacy fallback)
  const getCardImage = (p) => {
    if (p?.media?.gallery?.length) return p.media.gallery[0]?.src;
    if (p?.variants?.length && p.variants[0]?.images?.length)
      return p.variants[0].images[0];
    if (p?.image?.length) return p.image[0];
    return "/placeholder.jpg";
  };

  // Compute prices from new JSON; fall back to old fields
  const getPrices = (p) => {
    const base = p?.pricing?.base_price ?? p?.basePrice ?? 0;

    const discountActive =
      p?.pricing?.discount?.active ?? p?.discountPercent > 0;
    const pct = discountActive
      ? p?.pricing?.discount?.percent ?? p?.discountPercent ?? 0
      : 0;

    const effective = pct > 0 ? Math.round(base * (1 - pct / 100)) : base;

    // Currency
    const currency = p?.pricing?.currency || "INR";
    const symbol = currency === "INR" ? "₹" : "";

    return { base, effective, discountPercent: pct, symbol };
  };

  return (
    <section className="relative px-4 pt-[22px] pb-8 group bg-gray-50">
      <div className="mx-auto">
        <Title className="mb-8 text-center" subtitle="Customer Picks This Week">
          Featured Collection
        </Title>

        <div className="relative">
          <div
            className="flex gap-4 max-sm:gap-2 pb-6 overflow-x-auto scroll-smooth invisible-scrollbar"
            ref={ref}
          >
            {collections?.map((p) => {
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
          {leftArrow && (
            <button
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-16 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-all duration-200 group-hover:opacity-100 opacity-0 border border-gray-200"
              onClick={slideToStart}
              aria-label="Previous items"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
          )}

          {rightArrow && (
            <button
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-16 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition-all duration-200 group-hover:opacity-100 opacity-0 border border-gray-200"
              onClick={slideToEnd}
              aria-label="Next items"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Collection;
