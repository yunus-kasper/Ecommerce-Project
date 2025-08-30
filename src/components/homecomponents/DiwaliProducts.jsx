import Title from "../Title";
import products from "../../data/products.json";
import { Link } from "react-router";
import {
  getProductUrl,
  getCardImage,
  getPrices,
} from "../../utils/homePageUtils";

const DiwaliProducts = () => {
  // Sample product data
  const diwaliProducts = products.filter(
    (p) => p.category === "Festive Collection"
  );

  return (
    <div className=" bg-white py-12 px-4">
      {/* Minimalist Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-1 bg-[#eaa100]"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-3">
          Illuminate Your{" "}
          <span className="font-serif italic text-[#ebb100]">Diwali</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Elegant golden accents for your festive celebrations
        </p>
      </div>

      {/* Products Grid */}
      <div className=" mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">
        {diwaliProducts?.map((p) => {
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
};

export default DiwaliProducts;
