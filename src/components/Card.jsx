// Card.jsx
import { twMerge } from "tailwind-merge";
import Ratings from "./Ratings";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router";
import Button from "./Button";
import { Heart, ShoppingCart } from "lucide-react";
import { addToWishlist, removeFromWishlist } from "../redux/cart/wishlistSlice";

function Card({ cardData = [] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((c) => c.cart);
  const { wishlistItems } = useSelector((w) => w.wishlist);

  // useEffect(() => {
  //   const isInWishlist = ;
  //   setInWishlist(isInWishlist);
  // }, [wishlistItems, uuid]);

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 flex-wrap gap-2 justify-start overflow-visible">
      {cardData && cardData.length > 0 ? (
        cardData.map((item, index) => {
          const discountedPrice =
            item?.basePrice !== undefined
              ? Math.round(
                  item.basePrice - (item.discountPercent / 100) * item.basePrice
                )
              : null;

          const actualPrice = item.basePrice ? `₹${item.basePrice}` : "";
          console.log(typeof actualPrice)
          const discountPercent = item.discountPercent
            ? `${item.discountPercent}% Off`
            : "";

          const imageUrl = Array.isArray(item.image)
            ? item.image[0]
            : item.image || "/placeholder.png";

          const colorMap = {
            black: "bg-black",
            golden: "bg-[#D49A06]",
            white: "bg-white",
            silver: "bg-[#C0C0C0]",
          };
          // const firstColorClass = item.color?.[0]
          //   ? colorMap[item.color[0]] || "bg-gray-400"
          //   : "";

          return (
            <div
              key={item.uuid || index}
              onClick={() =>
                navigate(`/product/${encodeURIComponent(item.uuid)}`)
              }
              className="relative group flex flex-col lg:justify-between h-[333px] overflow-hidden group lg:hover:drop-shadow-md aspect-4/3 object-top cursor-pointer border border-gray-100"
            >
              {/* {cartItems.some(i => i.uuid === item.uuid) && <div className="absolute bg-white/70 px-2 py-1 rounded-full text-xs top-1 left-1 z-20 backdrop-blur-xl h-8 w-8 flex items-center"><ShoppingCart size={16}/></div>} */}
              {cartItems.some((i) => i.uuid === item.uuid) && (
                <div className="absolute bg-white/70 px-2 py-1 rounded-full text-xs top-1 left-1 z-20 backdrop-blur-xl">
                  Added to Cart
                </div>
              )}
              <button
                className="absolute hidden shadow-lg group-hover:block active:scale-110 transition-all ease-in-out duration-300 bg-white p-2 rounded-full text-xs top-1 right-1 z-20 cursor-default"
                onClick={(e) => {
                  e.stopPropagation();
                  wishlistItems.some((i) => i.uuid === item.uuid)
                    ? dispatch(removeFromWishlist(item))
                    : dispatch(addToWishlist(item));
                }}
              >
                <Heart
                  className="w-5 h-5  cursor-pointer"
                  fill={
                    wishlistItems.some((i) => i.uuid === item.uuid)
                      ? "red"
                      : "white"
                  }
                  stroke={
                    wishlistItems.some((i) => i.uuid === item.uuid)
                      ? "red"
                      : "black"
                  }
                />
              </button>
              <img
                className="lg:min-h-[202px] min-w-[207px] min-h-[160px] object-contain lg:group-hover:scale-110 transition duration-300 bg-white"
                src={
                  imageUrl.startsWith("/")
                    ? imageUrl
                    : `http://localhost:5000${imageUrl}`
                }
                alt={item.title || "Product"}
              />

              <div className="p-2 flex flex-col md:gap-[1.5px] gap-[3px] lg:justify-between bg-white min-h-[178px] lg:group-hover:-translate-y-12 transition duration-300">
                <p className="text-[14px] w-full whitespace-nowrap overflow-clip text-ellipsis">
                  {item.title || "Untitled Product"}
                </p>

                {item.tags && (
                  <p className="text-[13px] text-[#116500] lg:hidden py-0.5 px-1 bg-[#116500]/20 rounded-sm w-max">
                    {item.tags.join(", ")}
                  </p>
                )}

                <p className="md:text-[22px] whitespace-nowrap text-[13px] flex items-center gap-2">
                  ₹{discountedPrice.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) ?? "N/A"}
                  {actualPrice && (
                    <span className="md:text-[14px] text-[10px] text-[#787878] line-through">
                      {actualPrice.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  )}
                  {discountPercent && (
                    <span className="md:text-[14px] text-[10px] text-[#2E7D32]">
                      {discountPercent}
                    </span>
                  )}
                </p>

                {item.reviews && (
                  <div className="lg:hidden flex gap-2 items-center">
                    <Ratings avgRating={item.reviews?.length} />
                    <p className="text-[10px] text-[#383838]">
                      ({item.reviews?.length || "0"})
                    </p>
                  </div>
                )}

                <p className="text-[10px] lg:hidden ">
                  Delivery in {item.deliverBy || "3-5"} days
                </p>

                {/* {item.color?.[0] && (
                  <div
                    className={twMerge(
                      "w-4 h-4 ring-2 lg:block hidden ring-[#BEBEBE] ring-offset-2 ml-1 rounded-full",
                      firstColorClass
                    )}
                  />
                )} */}

                {item.color?.[0] && (
                  <div className="flex gap-2">
                    {item?.color.map((color) => (
                      <div
                        key={color}
                        className={twMerge(
                          "w-4 h-4 ring-2 lg:block hidden ring-[#BEBEBE] ring-offset-2 ml-1 rounded-full",
                          colorMap[color]
                        )}
                      />
                    ))}
                  </div>
                )}

                <div
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigating to details
                    dispatch(addToCart(item));
                  }}
                  className="pt-1 flex w-full justify-center lg:text-[15px] md:text-[12px] text-[10px] text-center whitespace-nowrap"
                >
                  <Button
                    btnClass="flex-1"
                    className="flex-1 py-2 w-full justify-center lg:text-[15px] md:text-[12px] text-[10px] text-center whitespace-nowrap"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="col-span-full text-center">No Products Available</h1>
      )}
    </div>
  );
}

export default Card;
