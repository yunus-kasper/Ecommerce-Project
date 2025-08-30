// import React from "react";
// import product from "../assets/ProductDetails1.jpg";
// import Button from "../components/Button";
// import { useState } from "react";
// import { ShoppingCart, Truck } from "lucide-react";
// import Ratings from "../components/Ratings";
// import Reviews from "../components/Reviews";
// import CustomerReview from "../components/CustomerReview";
// import FilterCard from "../components/FilterCard";
// import art1 from "../assets/Art1.webp";
// import art2 from "../assets/Art2.png";
// import art3 from "../assets/Art3.jpg";
// import art4 from "../assets/Art4.webp";
// import policy from "../assets/Return.png";
// import Navbar from "../components/Navbar";
// import Breadcrumbs from "../components/Breadcrumbs";
// import Footer from "../sections/Footer";
// import ProductQuickView from "../components/ProductQuickView";

// const arts = [
//   {
//     title: "Lord Krishna Hindu Deity Metal Wall Art",
//     price: "₹4,989",
//     discount: "68% off",
//     img: art1,
//     category: "lordkrishna",
//     date: "2024-06-16",
//     rating: 4.5,
//   },
//   {
//     title: "Lord Ganesh Hindu Deity Metal Wall Art",
//     price: "₹5,919",
//     discount: "68% off",
//     img: art2,
//     category: "lordganesha",
//     date: "2024-06-05",
//     rating: 5,
//   },
//   {
//     title: "Lord Shiva Hindu Deity Metal Wall Art",
//     price: "₹3,969",
//     discount: "68% off",
//     img: art3,
//     category: "lordshiva",
//     date: "2024-06-18",
//     rating: 4.7,
//   },
//   {
//     title: "Lord Hanuman Hindu Deity Metal Wall Art",
//     price: "₹8,999",
//     discount: "68% off",
//     img: art4,
//     category: "lordhanuman",
//     date: "2024-06-15",
//     rating: 4.8,
//   },
//   {
//     title: "Lord Krishna Hindu Deity Metal Wall Art",
//     price: "₹4,989",
//     discount: "68% off",
//     img: art1,
//     category: "lordkrishna",
//     date: "2024-06-16",
//     rating: 4.5,
//   },
// ];

// function ProductDetails() {
//   const [selected, setSelected] = useState(false);

//   return (
//     <>
//       <Navbar></Navbar>
//       <Breadcrumbs></Breadcrumbs>
//       <section className="lg:px-20 md:px-[60px] px-4">
//         <div className="flex justify-between">
//           <div className="">
//             <div className="flex flex-col xl:gap-4 gap-2">
//               <img
//                 className="xl:w-[200px] xl:h-[200px] w-[170px] h-[170px] rounded-sm"
//                 src={product}
//                 alt=""
//               />
//               <img
//                 className="xl:w-[200px] xl:h-[200px] w-[170px] h-[170px] rounded-sm"
//                 src={product}
//                 alt=""
//               />
//               <img
//                 className="xl:w-[200px] xl:h-[200px] w-[170px] h-[170px] rounded-sm"
//                 src={product}
//                 alt=""
//               />
//               <img
//                 className="xl:w-[200px] xl:h-[200px] w-[170px] h-[170px] rounded-sm"
//                 src={product}
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="relative ">
//             <img
//               className="xl:w-[600px] xl:h-[600px] min-w-[460px] h-[460px]"
//               src={product}
//               alt=""
//             />
//             <div className="absolute top-4 right-4 bg-white w-9 h-9 flex justify-center items-center p-1 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-heart"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
//               </svg>
//             </div>
//             <div className="absolute top-16 right-4 bg-white w-9 h-9 flex justify-center items-center p-1  rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 shapeRendering="geometricPrecision"
//                 textRendering="geometricPrecision"
//                 imageRendering="optimizeQuality"
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 viewBox="0 0 500 511.79"
//                 className="w-4"
//               >
//                 <path
//                   fillRule="nonzero"
//                   d="m269.99 365.32 16.43-107.39c-47.97 4.32-101.98 15.61-147.47 47.71C89.7 340.4 49.89 400.13 37.64 502.98c-.64 5.46-5.62 9.38-11.09 8.74-4.2-.5-7.48-3.55-8.49-7.42-10.98-32.88-16.63-63.92-17.81-93-3.28-79.5 26.44-144.41 70.29-193.89 43.54-49.13 101.12-83 154.02-100.77 21.76-7.31 42.82-11.95 61.87-13.82l-16.4-91.11c-.97-5.4 2.64-10.59 8.05-11.55 2.99-.54 5.91.33 8.08 2.13l210.22 173.9c4.24 3.51 4.84 9.81 1.34 14.05l-1.15 1.17-210.18 183.11c-4.16 3.62-10.48 3.18-14.1-.97a9.937 9.937 0 0 1-2.3-8.23zm38.07-116.86-14.25 93.1L474.6 184.07 294.45 35.01l13.7 76.58c.21 5.5-4.08 10.14-9.57 10.35-20.04.82-43.33 5.38-67.71 13.59-49.98 16.79-104.35 48.75-145.41 95.07-40.73 45.96-68.33 106.22-65.3 179.92.59 14.3 2.33 29.15 5.35 44.5 18.32-82.22 56.38-133.53 101.96-165.7 53.19-37.54 116.13-48.57 169.79-52.27l2.41.06c5.44.81 9.2 5.91 8.39 11.35z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="w-[597px]">
//             {/* Title */}
//             <h1 className="lg:text-[30px]">
//               Adiyogi Shiva Metal Wall Art | Sculpture For Home Living Room |
//               Aesthetic Classic Stylish Hanging Decoration
//             </h1>

//             {/* Ratings */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 pb-2 flex">
//               <span>3.8&ensp;</span>
//               <Ratings />
//               <span className="text-[#828282]">
//                 &ensp;&#124;&ensp;286 Ratings{" "}
//               </span>
//             </div>

//             {/* Amazon Price and product details */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 py-2 ">
//               <h1 className="text-[#AA2F1F] text-[14px] font-medium">
//                 <span>₹2,500</span>
//                 Amazon Price{" "}
//               </h1>
//               <p className="text-[14px] text-[#6C6B6B]">
//                 Product Dimensions -{" "}
//                 <span className="text-[#171515]">60L x 60W CM</span>
//               </p>
//               <p className="text-[14px] text-[#6C6B6B]">
//                 Item Weight - <span className="text-[#171515]">300 Grams</span>
//               </p>
//               <p className="text-[14px] text-[#6C6B6B]">
//                 Type - <span className="text-[#171515]">Unframed</span>
//               </p>
//             </div>

//             {/* Color */}
//             <div>
//               <p>Color</p>
//               <div className="w-2 p-2 rounded-full bg-black"></div>
//             </div>

//             {/* Quantity */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 py-2">
//               Quantity
//               <div className="flex gap-2 items-center">
//                 <span className="text-xl">-</span>
//                 <span>0</span>
//                 <span className="text-xl">+</span>
//               </div>
//             </div>

//             {/* Availablility */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 py-2 flex flex-col gap-2">
//               <h1 className="text-[#0A8E45] text-[14px] font-medium">
//                 Currently Available{" "}
//                 <span className="text-[#AA2F1F]">( Only 3 Left )</span>
//               </h1>
//               <div className="flex gap-2">
//                 <div className="relative border w-max p-1 group">
//                   <img
//                     className="w-[100px]"
//                     src={art3}
//                     alt="Lord shiva image"
//                   />
//                   <div className="pl-2">
//                     <h1>₹2,030</h1>
//                     <p className="text-[14px] line-through text-[#A2A2A2]">
//                       ₹5,999
//                     </p>
//                   </div>
//                   <div className="absolute z-20 group-hover:block hidden">
//                     <ProductQuickView
//                       dimensions="60L x 60W CM"
//                       weight="300"
//                       price="₹2,500"
//                     />
//                   </div>
//                 </div>
//                 <div className="relative border w-max p-1 group">
//                   <img
//                     className="w-[100px]"
//                     src={art3}
//                     alt="Lord shiva image"
//                   />
//                   <div className="pl-2">
//                     <h1>₹2,800</h1>
//                     <p className="text-[14px] line-through text-[#A2A2A2]">
//                       ₹5,999
//                     </p>
//                   </div>
//                   <div className="absolute z-20 group-hover:block hidden">
//                     <ProductQuickView
//                       dimensions="75L x 75W CM"
//                       weight="400"
//                       price="₹3,100"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <h1 className="text-[#0A8E45] text-[14px]">
//                 inclusive of all taxes
//               </h1>
//             </div>

//             {/* Cart and Buy Now */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 flex gap-2 justify-start py-6 ">
//               <Button
//                 className="lg:w-[200px] py-2 px-[10px] text-[15px] flex justify-center"
//                 icon={false}
//               >
//                 Add to Cart
//               </Button>
//               <Button
//                 className="lg:w-[200px] text-[#E2B000] flex justify-center rounded-[5px] "
//                 cart={true}
//               >
//                 Buy now
//               </Button>
//             </div>

//             {/* Delivery Options */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 py-[10px]">
//               <div className="flex flex-col gap-4 pb-2">
//                 <div className="flex gap-4 ">
//                   <h1 className="text-[18px]">Delivery Options</h1>
//                   <span>
//                     <Truck strokeWidth={2} />
//                   </span>
//                 </div>
//                 <div className="lg:w-[319px] border border-[#828282] py-[8px] px-[15px] rounded-[4px] flex justify-between">
//                   <input
//                     className="outline-0 font-extralight text-black text-[16px]"
//                     type="text"
//                     placeholder="Enter Pin Code"
//                   />
//                   <span className="text-[#D6AE1F]">Check</span>
//                 </div>
//                 <p className="text-[14px]">
//                   Please enter PIN code to check delivery time & Pay on Delivery
//                   Availability
//                 </p>
//               </div>
//               <div className="text-[15px] text-[#171515]">
//                 <p>100% Original Products</p>
//                 <p>Pay on delivery might be available</p>
//                 <p>Easy 14 days returns and exchanges</p>
//               </div>
//             </div>

//             {/* Specifications */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 flex flex-col gap-4 py-2">
//               <h1 className="underline text-[18px]">Specifications</h1>
//               <p>
//                 Product Description: (Size: 60L x 60W cm) (Adiyogi Shiv Ji 2
//                 Feet)
//               </p>

//               <div className=" text-[14px]">
//                 <p>
//                   <span className="text-[#6C6B6B]">Product Dimensions</span> -
//                   60L x 60W Centimeters
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Item Weight</span> - 300
//                   Grams
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Orientation</span> -
//                   Landscape
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Shape</span> - Round
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Theme</span> - Religious
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">
//                     Recommended Uses for Product
//                   </span>{" "}
//                   - Living Room
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Material</span> - Metal
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Frame Type</span> - Unframed
//                 </p>
//               </div>

//               <p>
//                 Product Description: (Size: 75L x 75W cm) (Adiyogi Shiv Ji 2
//                 Feet)
//               </p>

//               <div className=" text-[14px]">
//                 <p>
//                   <span className="text-[#6C6B6B]">Product Dimensions</span> -
//                   60L x 60W Centimeters
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Item Weight</span> - 300
//                   Grams
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Orientation</span> -
//                   Landscape
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Shape</span> - Round
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Theme</span> - Religious
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">
//                     Recommended Uses for Product
//                   </span>{" "}
//                   - Living Room
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Material</span> - Metal
//                 </p>
//                 <p>
//                   <span className="text-[#6C6B6B]">Frame Type</span> - Unframed
//                 </p>
//               </div>
//             </div>

//             {/* About Item */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 flex flex-col gap-4 py-2 text-[18px ]">
//               <h1 className="underline">About this item</h1>
//               <p className="text-[#6C6B6B] text-[12px]">
//                 Metal Sculpture Wall Art exemplifies craftsmanship at its
//                 finest. Each piece is meticulously crafted from high-quality
//                 metal, ensuring durability and longevity. The intricate
//                 detailing and artistic contours breathe life into the design,
//                 creating a captivating focal point for any room.
//               </p>
//               <p className="text-[#6C6B6B] text-[12px]">
//                 Metal Sculpture Wall Art is its versatility in placement.
//                 Designed for wall mounting, it effortlessly enhances the
//                 ambiance of any space. Whether adorning a prominent wall in the
//                 living room, adding flair to a bedroom, providing a focal point
//                 in a kitchen, or lending sophistication to an office
//                 environment.
//               </p>
//               <p className="text-[#6C6B6B] text-[12px]">
//                 Metal Sculpture Wall Art is crafted with durability in mind. The
//                 metal construction ensures resilience against wear and tear,
//                 making it suitable for long-term display without compromising on
//                 quality. The black finish not only enhances its visual appeal
//                 but also contributes to its resistance to fading
//               </p>
//               <p className="text-[#6C6B6B] text-[12px]">
//                 Metal Sculpture Wall Art excels in this regard. Its abstract
//                 design encourages interpretation, allowing viewers to derive
//                 personal meaning from its form and contours.
//               </p>
//               <p className="text-[#6C6B6B] text-[12px]">
//                 Idea Gift - Metal wall art can be used as gifts for Birthday,
//                 Mother&#39;s Day, Father&#39;s Day,Thanksgiving, Christmas,
//                 Teacher&#39;s Day. The variety of wall art piece each one is
//                 lifelike and very unique, you can give it to your family,
//                 mother, father, sister, friend, teacher, they will love it.
//               </p>
//             </div>

//             {/* Return policy */}
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 py-2 ">
//               <div className="flex gap-4">
//                 <img className="w-12 h-12" src={policy} alt="" />
//                 <p className="w-[174px] text-[14px] text-[#6C6B6B]">
//                   <span className="text-[16px] text-black ">
//                     Return within 14days{" "}
//                   </span>
//                   of receiving your order
//                 </p>
//               </div>
//             </div>

//             {/* Reviews */}
//             <div className="pt-2">
//               <div className="flex gap-4">
//                 <h1>Customer Reviews</h1>
//                 <span>
//                   <svg
//                     width="18"
//                     height="22"
//                     viewBox="0 0 18 22"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M6.99031 16L6.01531 16.474C4.03531 17.022 3.04431 17.296 2.51031 16.719C1.97631 16.143 2.25231 15.099 2.80531 13.009L2.94731 12.469C3.10431 11.874 3.18331 11.578 3.14431 11.283C3.10431 10.989 2.95131 10.73 2.64531 10.213L2.36731 9.743C1.29031 7.922 0.752311 7.012 1.11031 6.287C1.47031 5.563 2.48931 5.504 4.52831 5.387L5.05531 5.357C5.63531 5.323 5.92431 5.307 6.17731 5.172C6.42931 5.037 6.61631 4.8 6.99031 4.324L7.33031 3.892C8.64631 2.219 9.30431 1.383 10.0603 1.512C10.8163 1.641 11.1703 2.649 11.8773 4.666L12.0603 5.188C12.2613 5.761 12.3623 6.048 12.5573 6.258C12.7533 6.47 13.0213 6.582 13.5583 6.805L14.0473 7.009C15.9373 7.795 16.8823 8.18899 16.9893 8.99199C17.0813 9.67799 16.5123 10.275 15.3493 11.282"
//                       stroke="black"
//                       strokeWidth="1.5"
//                     />
//                     <path
//                       d="M12.2522 10.189C11.2652 9.00896 10.7722 8.41896 10.2042 8.50896C9.63723 8.59996 9.37223 9.31196 8.84223 10.736L8.70423 11.104C8.55423 11.509 8.47823 11.711 8.33123 11.86C8.18523 12.009 7.98323 12.088 7.58123 12.246L7.21423 12.389C5.79723 12.944 5.08823 13.222 5.00723 13.789C4.92623 14.356 5.52723 14.838 6.72823 15.8L7.03823 16.05C7.38023 16.323 7.55123 16.46 7.64923 16.647C7.74923 16.834 7.76423 17.051 7.79523 17.484L7.82423 17.878C7.93423 19.401 7.99023 20.163 8.50723 20.423C9.02423 20.683 9.66123 20.268 10.9342 19.44L11.2632 19.225C11.6252 18.99 11.8062 18.872 12.0132 18.838C12.2212 18.805 12.4332 18.86 12.8542 18.97L13.2392 19.07C14.7242 19.456 15.4672 19.65 15.8682 19.243C16.2692 18.836 16.0612 18.099 15.6472 16.623L15.5392 16.243C15.4222 15.823 15.3632 15.613 15.3922 15.406C15.4222 15.198 15.5372 15.016 15.7662 14.65L15.9762 14.318C16.7832 13.033 17.1862 12.391 16.9162 11.88C16.6472 11.369 15.8832 11.327 14.3542 11.245L13.9582 11.223C13.5242 11.2 13.3062 11.188 13.1172 11.093C12.9272 10.998 12.7872 10.83 12.5072 10.494L12.2522 10.189Z"
//                       stroke="black"
//                       strokeWidth="1.5"
//                     />
//                   </svg>
//                 </span>
//               </div>

//               <div className="flex justify-between border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 pt-4 pb-2">
//                 <div>
//                   <span className="flex text-xl">
//                     4.5&ensp;
//                     <Ratings />
//                   </span>
//                   <span className="text-[#6C6B6B] text-[12px]">
//                     519 Verified Buyers
//                   </span>
//                 </div>
//                 <Reviews />
//               </div>
//             </div>

//             {/* Customer Reviews */}
//             <CustomerReview />
//             <div className="border border-b-[#C7C7C7] border-t-0 border-l-0 border-r-0 pt-2">
//               <p className="underline text-[#D6AE1F] text-[14px]">
//                 View all 239 reviews
//               </p>
//               <div className="flex justify-between items-center py-4">
//                 <div className="flex flex-col justify-between">
//                   <p className="text-[15px] text-[#3D3D3D]">
//                     Share your Experience
//                   </p>
//                   <Ratings />
//                 </div>
//                 <div>
//                   <Button className="px-6 py-2">Submit Reviews</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Similar Products */}
//         <div>
//           <h1 className="py-2">Similar Product</h1>
//           <div>
//             <FilterCard cardData={arts}></FilterCard>
//           </div>
//         </div>

//         {/* Recent Products */}
//         <div className=" pb-12">
//           <h1 className="py-2">Latest Product</h1>
//           <div>
//             <FilterCard cardData={arts}></FilterCard>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default ProductDetails;

// ProductDetails.jsx
import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import products from "../data/products.json";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../sections/Footer";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import CustomerReview from "../components/CustomerReview";
import Card from "../components/Card";
import Button from "../components/Button";
import { Heart, Minus, Plus, Share2, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMultipleItemToCart,
  addToCart,
  decreaseQty,
  increaseQty,
} from "../redux/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/cart/wishlistSlice";

function ProductDetails() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [inWishlist, setInWishlist] = useState(false);
  const { cartItems, totalItems } = useSelector((s) => s.cart);
  const [inCart, setInCart] = useState(
    cartItems.some((item) => item.uuid === uuid)
  );
  const { wishlistItems } = useSelector((s) => s.wishlist);

  // find product by uuid
  const product = useMemo(() => products.find((p) => p.uuid === uuid), [uuid]);

  // fallback similar products (same category)
  const similar = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.uuid !== product.uuid && p.category === product.category)
      .slice(0, 10);
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <Breadcrumbs />
        <section className="lg:px-20 md:px-[60px] px-4 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Product not found</h2>
            <p className="mt-4">
              We couldn't find the product you are looking for.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-4 py-2 border rounded"
            >
              Go Back
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const avgRating =
    product?.reviews?.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;

  const discountedPrice = Math.round(
    product.basePrice - (product.discountPercent / 100) * product.basePrice
  );

  useEffect(() => {
    const isInWishlist = wishlistItems.some((item) => item.uuid === uuid);
    setInWishlist(isInWishlist);
  }, [wishlistItems, uuid]);

  useEffect(() => {
    setInCart(cartItems.some((item) => item.uuid === uuid));
  }, [cartItems, uuid]);

  useEffect(() => {
    const found = cartItems.find((item) => item.uuid === uuid);
    setTotalCartItems(found ? found.quantity : 0);
  }, [cartItems, uuid]);

  return (
    <>
      <Navbar />
      <Breadcrumbs title={product.title} />
      <section className="lg:px-20 md:px-[60px] px-4 py-6 ">
        <div className="flex max-lg:flex-col gap-8 items-start max-lg:items-center">
          {/* Thumbnails */}
          <div className="lg:sticky top-4 flex gap-8 ">
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
                    className="w-full h-full object-cover"
                  />
                  {mainImageIndex === idx && (
                    <div className="absolute inset-0 bg-[#D49A06]/10 pointer-events-none" />
                  )}
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="relative">
              <img
                className="xl:min-w-[600px] xl:h-[600px] md:min-w-[460px] max-md:w-[300px] h-[460px] object-cover"
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
              <div className="absolute top-4 max-md:top-2 max-md:right-2 right-4 flex flex-col gap-3">
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
              </div>
            </div>
          </div>
          {/* Details */}
          <div className="w-full">
            <h1 className="lg:text-[30px] font-semibold">{product.title}</h1>

            {/* <div className="border-b pb-2 flex items-center gap-3">
              <span className="text-lg">{product.rating ?? "—"}</span>
              <Ratings />
              <span className="text-[#828282]">
                | {product.stockQuantity ?? 0} Ratings
              </span>
            </div> */}

            {product?.reviews && (
              <div className="border-b border-gray-200 pb-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-semibold text-gray-900">
                    {avgRating ?? "—"}
                  </span>
                  <span className="text-gray-500 text-sm">/5</span>
                </div>

                <div className="flex flex-col gap-1">
                  <Ratings size={20} avgRating={avgRating} />{" "}
                  {/* Assuming your Ratings component accepts a size prop */}
                  <span className="text-sm text-gray-500">
                    {product.reviews?.length ?? 0}{" "}
                    {product.reviews?.length === 1 ? "Rating" : "Ratings"}
                  </span>
                </div>

                <div className="h-6 w-px bg-gray-300"></div>

                <button
                  className="text-sm font-medium text-[#D49A06] hover:text-[#B78605] transition-colors"
                  onClick={() =>
                    document.getElementById("reviews-section").scrollIntoView()
                  }
                >
                  See all reviews
                </button>
              </div>
            )}

            <div className="py-2 border-b">
              <div className="text-neural-700 text-2xl font-medium">
                <span className="mr-2">
                  ₹
                  {discountedPrice.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="line-through text-[#787878] font-normal text-sm">
                  {product.basePrice
                    ? `₹${product.basePrice}`
                    : ""}
                </span>
                {product.discountPercent ? (
                  <span className="ml-2 text-[#AA2F1F]">
                    {product.discountPercent}% Off
                  </span>
                ) : null}
              </div>

              <p className="text-[14px] text-[#6C6B6B] mt-2">
                Product Dimensions -{" "}
                <span className="text-[#171515]">
                  {product.dimension || "-"}
                </span>
              </p>
              <p className="text-[14px] text-[#6C6B6B]">
                Item Weight -{" "}
                <span className="text-[#171515]">{product.weight || "-"}</span>
              </p>
              <p className="text-[14px] text-[#6C6B6B]">
                Type -{" "}
                <span className="text-[#171515]">{product.type || "-"}</span>
              </p>
            </div>

            {/* Color options */}
            <div className="py-3">
              <p className="font-medium">Color</p>
              <div className="flex gap-2 mt-2">
                {product.color?.map((c) => (
                  <div
                    key={c}
                    className={`w-6 h-6 rounded-full border ${
                      c === "black"
                        ? "bg-black"
                        : c === "golden"
                        ? "bg-[#D49A06]"
                        : c === "white"
                        ? "bg-white"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Add to cart */}

            <div className="flex gap-3">
              {inCart ? (
                <div className="flex items-center gap-3 px-2 border-[#D49A06] ring-2 ring-[#D49A06]/50 shadow-md p-1 rounded-full transition-all ease-in">
                  <button
                    onClick={() => dispatch(decreaseQty(product))}
                    className="w-4 h-4 flex items-center justify-center rounded-full transition-colors"
                    disabled={isLoading} // Disable during loading
                  >
                    {totalCartItems === 1 ? <Trash2 /> : <Minus />}
                  </button>
                  <span className="w-6 text-center">{totalCartItems}</span>
                  <button
                    onClick={() => dispatch(increaseQty(product))}
                    className="w-4 h-4 flex items-center justify-center rounded-full transition-colors"
                    disabled={isLoading} // Disable during loading
                  >
                    <Plus></Plus>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoading(true);

                    // Simulate API delay
                    setTimeout(() => {
                      dispatch(addToCart(product));
                      setIsLoading(false);
                    }, 200); // delay in ms (1 seconds)
                  }}
                  disabled={isLoading}
                  className={`px-6 py-2 bg-[#ebb100] hover:bg-[#d9a300] text-black rounded-full transition-colors duration-200 ${
                    isLoading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-opacity-30 rounded-full animate-spin">
                        <div className="w-4 h-4 border-t-2 border-t-white border-r-2 border-r-transparent rounded-full"></div>
                      </div>
                      Adding...
                    </div>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              )}

              <button
                className="border border-gray-700 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-md"
                onClick={() => alert("Buy now flow")}
                disabled={isLoading} // Disable during loading
              >
                Buy now
              </button>
            </div>

            {/* Delivery */}
            {/* <div className="py-4 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[14px] font-medium">Delivery Options</h3>
                  <p className="text-sm text-[#6C6B6B]">
                    Please enter PIN code to check delivery time & Pay on
                    Delivery availability
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="border px-3 py-1 rounded"
                    placeholder="Enter Pin Code"
                  />
                  <span className="text-[#D6AE1F] cursor-pointer">Check</span>
                </div>
              </div>
            </div> */}

            {/* Delivery */}
            <div className="py-5 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Delivery Options
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enter your PIN code to check delivery time & COD
                    availability
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative flex-1 max-w-[200px]">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-[#D6AE1F] focus:border-[#D6AE1F] outline-none transition-all"
                      placeholder="Enter PIN code"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>

                  <button className="px-4 py-2 bg-[#D6AE1F] hover:bg-[#e2b659] text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1">
                    Check
                  </button>
                </div>
              </div>

              {/* Delivery estimate could appear here after checking */}
              {/* <div className="mt-3 p-3 bg-green-50 text-sm text-green-800 rounded-md">
    Delivery expected by Friday, 18 August
  </div> */}
            </div>

            {/* Specifications */}
            <div className="py-4 border-b">
              <h3 className="underline">Specifications</h3>
              <div className="text-[14px] mt-2">
                <p>
                  <span className="text-[#6C6B6B]">SKU</span> -{" "}
                  {product.SKU || "-"}
                </p>
                <p>
                  <span className="text-[#6C6B6B]">Material</span> -{" "}
                  {(product.materialType || []).join(", ") || "-"}
                </p>
                <p>
                  <span className="text-[#6C6B6B]">Return Policy</span> -{" "}
                  {product.returnPolicy || "-"}
                </p>
                <p
                  className={`font-medium ${
                    product.stockQuantity > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="text-[#6C6B6B]">Stock -</span>{" "}
                  {product.stockQuantity ?? 0} available
                </p>
              </div>
            </div>

            {/* <div className="py-5 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-100">
                Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div className="flex gap-2">
                  <span className="text-gray-600 min-w-[120px]">SKU</span>
                  <span className="text-gray-900 font-medium">
                    {product.SKU || "-"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-gray-600 min-w-[120px]">Material</span>
                  <span className="text-gray-900 font-medium">
                    {(product.materialType || []).join(", ") || "-"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-gray-600 min-w-[120px]">
                    Return Policy
                  </span>
                  <span className="text-gray-900 font-medium">
                    {product.returnPolicy || "-"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="text-gray-600 min-w-[120px]">Stock</span>
                  <span
                    className={`font-medium ${
                      product.stockQuantity > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.stockQuantity > 0
                      ? `${product.stockQuantity} available`
                      : "Out of stock"}
                  </span>
                </div>
              </div>
            </div> */}

            {/* About */}
            <div className="py-4">
              <h3 className="underline">About this item</h3>
              <p className="text-[#6C6B6B] mt-2">{product.description}</p>
            </div>

            {/* Reviews */}
            <div className="py-4" id="reviews-section">
              <h3 className="text-lg">Customer Reviews</h3>
              <div className="mt-2">
                <div className="mt-4">
                  <Reviews reviews={product?.reviews} avgRating={avgRating} />
                </div>
                <CustomerReview reviews={product?.reviews} uuid={uuid} />
              </div>
            </div>
          </div>
        </div>

        {/* Similar & Latest */}
        <div className="mt-8">
          <h2 className="py-2">Similar Products</h2>
          <Card cardData={similar} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;

// // cart
// <div className="py-4 border-b flex items-center gap-4">
//               <div className="flex gap-3">
//                 {inCart ? (
//                   <div className="flex items-center gap-3 border p-1 rounded ">
//                     <button
//                       onClick={() =>
//                         setTotalCartItems(
//                           totalCartItems > 1
//                             ? totalCartItems - 1
//                             : totalCartItems
//                         )
//                       }
//                     >
//                       -
//                     </button>
//                     <span className="w-2 text-center">{totalCartItems}</span>
//                     <button
//                       onClick={() => setTotalCartItems(totalCartItems + 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={() =>
//                       dispatch(
//                         addMultipleItemToCart({
//                           product,
//                           quantity: totalCartItems,
//                         })
//                       )
//                     }
//                   >
//                     <Button className="px-6 py-2">Add to Cart</Button>
//                   </div>
//                 )}

//                 <button className="border-gray-700 text-gray-700 border px-4 rounded-md">
//                   Buy now
//                 </button>
//               </div>
//             </div>
