import React, { useState } from "react";
import products from "../data/products.json";
import Reviews from "../components/Reviews";
import CustomerReview from "../components/CustomerReview";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

function AllReviews() {
  const { uuid } = useParams();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const product = products.find((p) => p.uuid === uuid);

  const avgRating =
    product?.reviews?.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;
  return (
    <>
      <Navbar></Navbar>
      <section className="lg:px-20 md:px-[60px] px-4 py-6">
        <div className="flex gap-8 items-start">
          <div className="sticky top-4 flex gap-8">
            <div className="flex flex-col gap-4 rounded-lg">
              {product.image?.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative w-20 h-20 overflow-hidden rounded-md border-2 transition-all duration-200 cursor-pointer hover:scale-105 ${
                    mainImageIndex === idx
                      ? "border-[#D49A06] ring-2 ring-[#D49A06]/30 shadow-md"
                      : "border-transparent hover:border-gray-200"
                  }`}
                  onMouseEnter={() => setMainImageIndex(idx)}
                >
                  <img
                    src={
                      img.startsWith("/") ? img : `http://localhost:5000${img}`
                    }
                    alt={`${product.title} ${idx}`}
                    className="w-full h-full object-contain"
                  />
                  {mainImageIndex === idx && (
                    <div className="absolute inset-0 bg-[#D49A06]/10 pointer-events-none" />
                  )}
                </div>
              ))}
            </div>

            {/* Main image */}
            <div>
              <img
                className="xl:min-w-[600px] xl:h-[600px] min-w-[460px] h-[460px] object-cover"
                src={
                  (
                    product.image?.[mainImageIndex] || "/placeholder.png"
                  ).startsWith("/")
                    ? product.image?.[mainImageIndex] || "/placeholder.png"
                    : `http://localhost:5000${
                        product.image?.[mainImageIndex] || ""
                      }`
                }
                alt={product.title}
              />

              {/* quick action icons */}
              {/* <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button
              className="shadow-md bg-white w-9 h-9 flex items-center justify-center rounded-full"
              onClick={() => {
                inWishlist
                  ? dispatch(removeFromWishlist(product))
                  : dispatch(addToWishlist(product));
              }}
            >
              <Heart
                fill={inWishlist ? "red" : "none"}
                stroke={inWishlist ? "red" : "currentColor"}
              />
            </button>

            <button className="shadow-md bg-white w-9 h-9 flex items-center justify-center rounded-full">
              <Share2></Share2>
            </button>
          </div> */}
            </div>
          </div>
          <div className="w-full" id="reviews-section">
            <h3 className="text-xl font-semibold">
              {product.title} ({product.dimension})
            </h3>
            <div className="mt-2">
              <div className="mt-4">
                <Reviews reviews={product?.reviews} avgRating={avgRating} />
              </div>
              <CustomerReview reviews={product?.reviews} allReviews={true} />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default AllReviews;
