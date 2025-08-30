import topRated1 from "../../assets/TR1.png";
import topRated2 from "../../assets/TR2.png";
import topRated3 from "../../assets/TR3.png";
import topRated4 from "../../assets/TR4.png";
import Button from "../Button";
import Tilt from "react-parallax-tilt";
import Title from "../Title";
import products from "../../data/products.json";
import { Link, useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import Ratings from "../Ratings";
import {
  getProductUrl,
  getCardImage,
  getPrices,
} from "../../utils/homePageUtils";

// const topProducts = [
//   {
//     name: "Butterfly Blooms",
//     description: "Floral Collection",
//     img: topRated1,
//   },
//   {
//     name: "Mother Tree of Life",
//     description: "Nature & Spirituality",
//     img: topRated2,
//   },
//   {
//     name: "Adiyogi Grace",
//     description: "Spiritual Awakening",
//     img: topRated3,
//   },
//   {
//     name: "Lotus Chakra Meditative Panel",
//     description: "Wellness & Balance",
//     img: topRated4,
//   },
// ];

const bgColors = [
  "bg-[#F6E4DB]",
  "bg-[#F3DBDB]",
  "bg-[#DEB687]",
  "bg-gradient-to-r from-[#F9F9F8] to-[#DEDEDE]",
  "bg-[#bfd7b5]",
];

const heightWidth = [
  "w-full h-auto max-h-[180px] md:max-h-[220px] lg:max-h-[254px] object-contain",
  "w-full h-auto max-h-[150px] md:max-h-[180px] lg:max-h-[200px] object-contain",
  "w-full h-auto max-h-[180px] md:max-h-[200px] lg:max-h-[263px] object-contain",
  "w-full h-auto max-h-[180px] md:max-h-[200px] lg:max-h-[261px] object-contain",
];

const topProducts = products
  .map((item) => {
    const avgRating =
      item.reviews && item.reviews.length > 0
        ? item.reviews.reduce((sum, r) => sum + r.rating, 0) /
          item.reviews.length
        : 0;

    return { ...item, avgRating }; // Add avgRating to product
  })
  .filter((item) => item.avgRating >= 4) // Only products with 4⭐ or more
  .sort((a, b) => b.avgRating - a.avgRating) // Sort by highest avg rating
  .slice(0, 5); // Take top 5

function actualPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

function totalRating(ratings) {
  return (
    ratings.reduce((total, rating) => total + rating.rating, 0) / ratings.length
  );
}

function TopProducts() {
  const navigate = useNavigate();
  return (
    <div className="px-2 bg-white border border-gray-100">
      <div className="flex items-center">
        <Title className="md:items-start px-2">Top Products</Title>
        <Link
          className="whitespace-nowrap text-blue-900 px-2 text-xs underline cursor-pointer"
          to={`/products/top-products`}
        >
          explore more
        </Link>
      </div>

      <div className="grid gap-2 sm:gap-6 lg:gap-8 grid-cols-2 md:grid-cols-5">
        {topProducts?.map((p) => {
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
    </div>
  );
}

export default TopProducts;
