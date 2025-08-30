import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Menu,
  X,
  LayoutDashboard,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import UserProfile from "./UserProfile";
// import MobileNav from "./MobileNav";
import products from "../data/products.json";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
// import { AnimatePresence } from "framer-motion";

// const NavLinks = [
//   { id: 1, name: "Home", path: "/" },
//   {
//     id: 2,
//     name: "Shop",
//     list: [
//       {
//         name: "Spiritual & Religious Art",
//         path: "/art",
//         sublist: [
//           {
//             name: "Lord Ganesha",
//             category: "lordganesha",
//           },
//           {
//             name: "Lord Shiva (Natraja/Trishul)",
//             category: "lordshiva",
//           },
//           {
//             name: "Buddha",
//             category: "buddhism",
//           },
//           {
//             name: "Om Symbol",
//             category: "symbol",
//           },
//           {
//             name: "Mandala Art",
//             category: "mandala",
//           },
//           {
//             name: "Tree of Life",
//             category: "nature",
//           },
//           {
//             name: "Islamic Calligraphy (Bismillah, Ayatul Kursi)",
//             category: "islamic",
//           },
//           {
//             name: "Jesus / cross / Angel",
//             category: "christian",
//           },
//         ],
//       },
//       {
//         name: "Festival & Occasion",
//         path: "/festival",
//         sublist: [
//           {
//             name: "Diwali (Diya, Shubh Labh)",
//             category: "diwali",
//           },
//           {
//             name: "Eid ( Crescent, Mubarak Signs)",
//             category: "eid",
//           },
//           {
//             name: "Christmas (Tree, Reindeer, cross)",
//             category: "christmas",
//           },
//           {
//             name: "Birthday Name Boards",
//             category: "birthday",
//           },
//           {
//             name: "Wedding Decor (Custom Couple Signs)",
//             category: "wedding",
//           },
//         ],
//       },
//       {
//         name: "Geometric & Abstract",
//         path: "/geometric",
//         sublist: [
//           {
//             name: "Abstract Human Figures",
//             category: "human",
//           },
//           {
//             name: "Polygon Animal Heads",
//             category: "animal",
//           },
//           {
//             name: "Couple Themes (Love, Together, Mr. & Mrs.)",
//             category: "couple",
//           },
//           {
//             name: "Mandala Art",
//             category: "mandala",
//           },
//           {
//             name: "Om Symbol",
//             category: "symbol",
//           },
//           {
//             name: "Sacred Geometry (Flower of Life, Spiral Art)",
//             category: "geometry",
//           },
//         ],
//       },
//       {
//         name: "Nature & Wildlife",
//         path: "/nature",
//         sublist: [
//           {
//             name: "Forest Scenes",
//             category: "forest",
//           },
//           {
//             name: "Birds & Butterflies",
//             category: "birds",
//           },
//           {
//             name: "Animal Silhouettes (Lion, Elephant, Deer, Owl, Horse)",
//             category: "animal",
//           },
//           {
//             name: "Sea Life (Dolphins, Whale, Fish)",
//             category: "aquatic",
//           },
//           {
//             name: "Mountain Landscapes",
//             category: "mountain",
//           },
//         ],
//       },
//       {
//         name: "Wall Arts",
//         path: "/traditional",
//         sublist: [
//           {
//             name: "Traditional Wall Arts",
//             category: "traditionalarts",
//           },
//           {
//             name: "3D Lazer Wall Arts",
//             category: "lazerarts",
//           },
//           {
//             name: "Traditional Wall Clocks",
//             category: "traditionalclocks",
//           },
//           {
//             name: "Modern Wall Clocks",
//             category: "modernclocks",
//           },
//           {
//             name: "Laser Wall Clocks",
//             category: "laserclocks",
//           },
//           {
//             name: "Traditional Wall Mirrors",
//             category: "traditionalmirror",
//           },
//           {
//             name: "Modern Wall Mirrors",
//             category: "modernmirror",
//           },
//         ],
//       },
//       {
//         name: "Typography",
//         path: "/typography",
//         sublist: [
//           {
//             name: "Typography",
//             category: "typography",
//           },
//           {
//             name: "Half Moon",
//             category: "moon",
//           },
//           {
//             name: "Half Moon with Allah",
//             category: "moontypography",
//           },
//           {
//             name: "Ayatul Kursi Tulip Shaped ",
//             category: "surah",
//           },
//           {
//             name: "3D kaaba",
//             category: "kaaba",
//           },
//         ],
//       },
//       {
//         name: "Reflection Art",
//         path: "/reflection",
//         sublist: false,
//       },
//       {
//         name: "Clones",
//         path: "/clones",
//         sublist: false,
//       },
//     ],
//   },
//   { id: 3, name: "FAQS", path: "/faqs" },
// ];

// function Navbar() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [showChoice, setShowChoice] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [subDropdown, setSubDropdown] = useState(
//     new Array(NavLinks[1].list.length).fill(false)
//   );
//   const [hoveredLink, setHoveredLink] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (userData?.user?.role?.toLowerCase() === "admin") {
//       setShowChoice(true);

//       console.log(showChoice);
//     } else {
//       setShowChoice(false);
//     }
//   }, []);

//   return (
//     <section className="md:mt-[75px] mt-[40px]">
//       <div className="fixed z-50 top-0 bg-white w-full flex justify-between items-center lg:px-20 md:px-[60px] px-4 md:py-[23px] py-[12px] border border-t-0 border-l-0 border-r-0 border-b-[#EBEBEB]">
//         <div className="flex lg:gap-[130px] gap-4 items-center">
//           <div
//             className="sm:hidden block cursor-pointer"
//             onClick={() => {
//               setIsOpen(!isOpen);
//             }}
//           >
//             {isOpen ? (
//               <X
//                 className="
//               active:scale-50 self-start duration-500 transition ease-in-out"
//               />
//             ) : (
//               <Menu className="active:scale-50 self-end duration-500 transition ease-in-out"></Menu>
//             )}
//           </div>
//           <p className="sm:mr-8 text-xl font-serif">Lasercut</p>
//           <div className="lg:flex gap-8 hidden">
//             {NavLinks.map((link) => {
//               const isHovered = link.id === hoveredLink;
//               const textStyle = {
//                 background: isHovered
//                   ? "linear-gradient(to right, #D3AB2D, #C19403, #E3D249, #D3A828, #F5D657, #F9DB60, #CFA511)"
//                   : "transparent",
//                 WebkitBackgroundClip: isHovered ? "text" : "initial",
//                 WebkitTextFillColor: isHovered ? "transparent" : "#000000",
//                 color: isHovered ? "transparent" : "#000000",
//                 transition: "all 0.5s ease",
//               };

//               return (
//                 <span
//                   key={link.id}
//                   className="relative text-[#565656] text-[18px] flex gap-2 items-center cursor-pointer"
//                 >
//                   {link.name === "Shop" ? (
//                     <div className="group">
//                       <span
//                         className="link-border flex gap-2 items-center group"
//                         onMouseEnter={() => {
//                           setHoveredLink(link.id);
//                         }}
//                         onMouseLeave={() => {
//                           setHoveredLink(null);
//                         }}
//                         style={textStyle}
//                         onClick={() => navigate(link.path)}
//                       >
//                         {link.name}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           fill="currentColor"
//                           className={`bi bi-chevron-down group-hover:rotate-0 -rotate-90 transition duration-300 ease-in`}
//                           viewBox="0 0 16 16"
//                         >
//                           {hoveredLink == 2 && (
//                             <defs>
//                               <linearGradient
//                                 id="goldGradient"
//                                 x1="0%"
//                                 y1="0%"
//                                 x2="100%"
//                                 y2="0%"
//                               >
//                                 <stop offset="0%" stopColor="#D3AB2D" />
//                                 <stop offset="16%" stopColor="#C19403" />
//                                 <stop offset="32%" stopColor="#E3D249" />
//                                 <stop offset="48%" stopColor="#D3A828" />
//                                 <stop offset="64%" stopColor="#F5D657" />
//                                 <stop offset="80%" stopColor="#F9DB60" />
//                                 <stop offset="100%" stopColor="#CFA511" />
//                               </linearGradient>
//                             </defs>
//                           )}
//                           <path
//                             fill={`${
//                               hoveredLink === 2
//                                 ? "url(#goldGradient)"
//                                 : "evenodd"
//                             }`}
//                             d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//                           />
//                         </svg>
//                       </span>
//                       <div className="w-[250px] hidden group-hover:flex flex-col gap-2 absolute bg-white top-7 z-50 rounded-[10px] border border-[#EBEBEB] delay-500 duration-500 transition ">
//                         {link.list?.map((listItem, index) => (
//                           //parent
//                           <div
//                             key={index}
//                             className="relative group/subList p-2"
//                           >
//                             <span
//                               className="flex justify-between hover:text-black hover:font-medium items-center"
//                               onClick={() => {
//                                 navigate(listItem.path);
//                               }}
//                             >
//                               {listItem.name}
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="currentColor"
//                                 className="bi bi-chevron-down -rotate-90"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path
//                                   fillRule="evenodd"
//                                   d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//                                 />
//                               </svg>
//                             </span>

//                             {listItem.sublist && (
//                               <div className="absolute group-hover/subList:flex hidden border border-[#EBEBEB] bg-white -right-[201.5px] -top-0.5 w-[200px] rounded-[10px] p-2 delay-500 duration-500 transition ">
//                                 <div className="flex flex-col gap-2 ">
//                                   {listItem.sublist?.map(
//                                     (subItem, subIndex) => (
//                                       <span
//                                         key={subIndex}
//                                         onClick={() =>
//                                           navigate(listItem.path, {
//                                             state: subItem.category,
//                                           })
//                                         }
//                                         className="text-sm text-gray-600 hover:text-black"
//                                       >
//                                         {subItem.name}
//                                       </span>
//                                     )
//                                   )}
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <span
//                       onClick={() => navigate(link.path)}
//                       className="link-border"
//                       onMouseEnter={() => setHoveredLink(link.id)}
//                       onMouseLeave={() => setHoveredLink(null)}
//                       style={textStyle}
//                     >
//                       {link.name}
//                     </span>
//                   )}
//                 </span>
//               );
//             })}
//           </div>
//         </div>

//         <div className="lg:flex md:hidden max-sm:flex gap-6 text-[#565656] items-center">
//           <div className="flex gap-6">
//             {showChoice && (
//               <span
//                 onClick={() => navigate("/admin/dashboard")}
//                 className="flex items-center justify-center"
//               >
//                 <LayoutDashboard size={15} />
//               </span>
//             )}
//             <div className="relative group/userAccount">
//               <span
//                 href="#"
//                 onClick={() => {
//                   setIsProfileOpen(!isProfileOpen);
//                 }}
//                 className="relative "
//               >
//                 <UserRound
//                   size={15}
//                   strokeWidth={`${isProfileOpen ? "0" : "2"}`}
//                   fill={`${isProfileOpen ? "gold" : "transparent"}`}
//                 />
//               </span>

//               <div className="absolute right-0 top-0 hidden group-hover/userAccount:block">
//                 <UserProfile />
//               </div>
//             </div>
//             <a href="#">
//               <Search size={15} />
//             </a>
//             <a href="#">
//               <Heart size={15} />
//             </a>
//             <a href="#">
//               <ShoppingCart size={15} />
//             </a>
//           </div>

//         </div>

//         <div
//           className="lg:hidden sm:block hidden cursor-pointer"
//           onClick={() => {
//             setIsOpen(!isOpen);
//           }}
//         >
//           {isOpen ? (
//             <X
//               className="
//               active:scale-50 self-start duration-500 transition ease-in-out"
//             />
//           ) : (
//             <Menu className="active:scale-50 self-end duration-500 transition ease-in-out"></Menu>
//           )}
//         </div>
//       </div>

//       {/* mobile Nav */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ transform: "translateX(-100%)", opacity: 0 }}
//             animate={{ transform: "translateX(0)", opacity: 1 }}
//             exit={{ transform: "translateX(-100%)", opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="fixed z-40 h-full md:w-[400px] border sm:w-[300px] w-[250px] lg:hidden bg-white cursor-pointer"
//           >
//             <motion.div
//               initial={{ width: "0px" }}
//               animate={{ width: "auto" }}
//               exit={{ width: "0" }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className=" min-h-[500px] my-20 flex flex-col gap-4 items-end md:hidden"
//             >
//               {NavLinks.map((link) => (
//                 <span
//                   key={link.id}
//                   className=" text-[#565656] px-4 text-[18px] transition-all duration-200 ease-in flex justify-start gap-2 items-center w-full overflow-hidden z-20"
//                 >
//                   {link.name === "Shop" ? (
//                     <div className="">
//                       <span
//                         className="flex gap-4 items-center  min-w-full pr-2"
//                         // onClick={() => navigate(link.path)}
//                         onClick={() => setDropdown(!dropdown)}
//                       >
//                         {link.name}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           fill="currentColor"
//                           className={`bi bi-chevron-down ${
//                             dropdown ? "rotate-0" : "-rotate-90"
//                           } transition duration-300 ease-in`}
//                           viewBox="0 0 16 16"
//                         >
//                           <path
//                             fill={"evenodd"}
//                             d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//                           />
//                         </svg>
//                       </span>
// <AnimatePresence>
//   {dropdown && (
//     <div className="overflow-hidden flex flex-col justify-start bg-white duration-500 transition pt-2 ">
//       {link.list?.map((listItem, index) => (
//         //parent
//         <motion.div
//           initial={{
//             opacity: 0,
//             transform: "translateY(-100vh)",
//           }}
//           animate={{
//             opacity: 1,
//             transform: "translateY(0)",
//           }}
//           exit={{
//             opacity: 0,
//             transform: "translateY(-100vh)",
//           }}
//           transition={{
//             duration: 0.4,
//             ease: "easeInOut",
//           }}
//           key={index}
//           className="overflow-hidden p-2 min-w-[230px] md:min-w-[350px]"
//         >
//           <span
//             className="w-full flex justify-between hover:text-black hover:font-medium items-center lg:text-[20px] md:text-[18px] text-[15px]"
//             // onClick={() => {
//             //   navigate(listItem.path);
//             // }}
//             onClick={() => {
//               const updated = subDropdown.map((item, i) =>
//                 i === index ? !item : false
//               );
//               setSubDropdown(updated);
//             }}
//           >
//             {listItem.name}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className={`bi bi-chevron-down ${
//                 subDropdown[index] && listItem.sublist
//                   ? "rotate-0"
//                   : "-rotate-90"
//               } transition duration-300 ease-in`}
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
//               />
//             </svg>
//           </span>
//           <AnimatePresence>
//             {subDropdown[index] && listItem.sublist && (
//               <div className="overflow-hidden w-full flex bg-white pt-2 pl-2">
//                 {listItem.sublist && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       transform: "translateY(-100%)",
//                     }}
//                     animate={{
//                       opacity: 1,
//                       transform: "translateY(0)",
//                     }}
//                     transition={{
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     }}
//                     className="flex flex-col gap-2 "
//                   >
//                     {listItem.sublist.map(
//                       (subItem, subIndex) => (
//                         <span
//                           key={subIndex}
//                           onClick={() =>
//                             navigate(listItem.path, {
//                               state: subItem.category,
//                             })
//                           }
//                           className="text-sm text-gray-600 hover:text-black"
//                         >
//                           {subItem.name}
//                         </span>
//                       )
//                     )}
//                   </motion.div>
//                 )}
//               </div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       ))}
//     </div>
//   )}
// </AnimatePresence>
//                     </div>
//                   ) : (
//                     <span className=" w-16" onClick={() => navigate(link.path)}>
//                       {link.name}
//                     </span>
//                   )}
//                 </span>
//               ))}
//             </motion.div>{" "}
//             <MobileNav navLinks={NavLinks}></MobileNav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default Navbar;

const shopCategories = Object.values(
  products.reduce((acc, { category, subcategory }) => {
    if (!acc[category]) {
      acc[category] = {
        name: category,
        path: `/products/${encodeURIComponent(category)}`, // matches your route
        sublist: [],
      };
    }

    if (!acc[category].sublist.some((sub) => sub.name === subcategory)) {
      acc[category].sublist.push({
        name: subcategory,
        category: subcategory,
        path: `/${encodeURIComponent(subcategory)}`,
      });
    }

    return acc;
  }, {})
);

function Navbar() {
  const [showChoice, setShowChoice] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalWishlistItems = useSelector(
    (state) => state?.wishlist?.totalItems
  );

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));

    // Show dashboard icon if logged-in user is an admin
    if (userData?.user?.role?.toLowerCase() === "admin") {
      setShowChoice(true);
    } else {
      setShowChoice(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint in Tailwind = 768px
        setDropdown(false);
      }
    };

    if (dropdown) {
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when dropdown closes
      document.body.style.overflow = "auto";
    }

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [dropdown]);

  return (
    // <div className="py-[15px] lg:px-[80px] md:px-[60px] px-[16px]  flex justify-between items-center">
    //   <div className="flex justify-between lg:w-[483px] w-[400px]">
    //     <div className="flex gap-4 items-center">
    //       <div className="md:hidden block">
    //         <Menu></Menu>
    //       </div>
    //       <h1>LaserCut</h1>
    //     </div>

    //     {/* Nav Links for Desktop */}
    //     <div className="flex gap-[50px] md:gap-[30px] max-md:hidden">
    //       <Link to={"/"}>Home</Link>

    //       {/* 'Shop' dropdown trigger */}
    //       {/* Shop Dropdown */}
    //       <div className="relative group">
    //         <span className="flex gap-2 items-center cursor-pointer">
    //           Shop
    //           <ChevronDown
    //             size={20}
    //             className="transition-transform group-hover:rotate-180 duration-300"
    //           />
    //         </span>

    //         {/* Dropdown container */}
    //         <div className="absolute hidden group-hover:flex flex-col gap-2 bg-white z-50 rounded-[10px]  w-[250px] top-[25px] left-0 border border-[#EBEBEB]">
    //           {shopCategories.map((item, index) => (
    //             <div key={index} className="relative group/item w-full p-2">
    //               <span
    //                 className="flex justify-between items-center hover:text-black hover:font-medium cursor-pointer"
    //                 onClick={() => navigate(item.path)}
    //               >
    //                 {item.name}
    //                 {item.sublist && (
    //                   <ChevronDown size={14} className="-rotate-90" />
    //                 )}
    //               </span>

    //               {/* Sublist Dropdown */}
    //               {item.sublist && (
    //                 <div className="absolute hidden group-hover/item:flex flex-col bg-white border border-[#EBEBEB] rounded-[10px] p-2 top-0 left-[100%] min-w-[200px] z-50">
    //                   {item.sublist.map((subItem, subIndex) => (
    //                     <span
    //                       key={subIndex}
    //                       onClick={() =>
    //                         navigate(item.path, { state: subItem.category })
    //                       }
    //                       className="text-sm text-gray-600 hover:text-black cursor-pointer"
    //                     >
    //                       {subItem.name}
    //                     </span>
    //                   ))}
    //                 </div>
    //               )}
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <Link to={"/faqs"}>FAQS</Link>
    //     </div>
    //   </div>

    //   {/* Right-side Icons: Static for all devices */}
    //   <div className="flex gap-6 text-[#565656] items-center">
    //     <div className="flex gap-6 items-center">
    //       <a>
    //         <Search size={15} />
    //       </a>
    //       {showChoice && (
    //         <span
    //           onClick={() => navigate("/productForm")}
    //           className="flex items-center justify-center"
    //         >
    //           <LayoutDashboard size={15} />
    //         </span>
    //       )}
    //       <div className="relative group/userAccount z-50">
    //         <span
    //           href="#"
    //           onClick={() => {
    //             setIsProfileOpen(!isProfileOpen);
    //           }}
    //           className=""
    //         >
    //           <UserRound size={15} />
    //         </span>

    //         <div className="absolute right-0 top-0 hidden group-hover/userAccount:block">
    //           <UserProfile />
    //         </div>
    //       </div>
    //       <a href="/wishlist" className="relative">
    //         <Heart size={20} />
    //         {totalWishlistItems > 0 && (
    //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
    //             {totalWishlistItems}
    //           </span>
    //         )}
    //       </a>
    //       <a href="/bag" className="relative">
    //         <ShoppingCart size={20} />

    //         {/* Badge */}
    //         {totalItems > 0 && (
    //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
    //             {totalItems}
    //           </span>
    //         )}
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="py-4 lg:px-20 md:px-16 px-4 bg-white shadow-sm">
        <div className="flex justify-between items-center w-full ">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            {/* Mobile menu button */}
            <div
              className="md:hidden block cursor-pointer"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              {dropdown ? (
                <X
                  className="
              active:scale-50 self-start duration-500 transition ease-in-out"
                />
              ) : (
                <Menu className="active:scale-50 self-end duration-500 transition ease-in-out"></Menu>
              )}
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-600">LaserCut</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link
                to="/"
                className="text-gray-700  transition-colors font-medium"
              >
                Home
              </Link>

              {/* Shop Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700  transition-colors font-medium">
                  Shop
                  <ChevronDown
                    size={18}
                    className="transition-transform group-hover:rotate-180 duration-200"
                  />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                  {shopCategories.map((item, index) => (
                    <div key={index} className="relative group/item">
                      <button
                        onClick={() => navigate(item.path)}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-amber-50  flex justify-between items-center"
                      >
                        {item.name}
                        {item.sublist && (
                          <ChevronRight size={14} className="text-gray-400" />
                        )}
                      </button>

                      {/* Sublist Dropdown */}
                      {item.sublist && (
                        <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-200">
                          {item.sublist.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => navigate(item.path + subItem.path)}
                              className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-amber-50 "
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/faqs"
                className="text-gray-700  transition-colors font-medium"
              >
                FAQs
              </Link>
            </nav>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600  transition-colors">
              <Search size={20} />
            </button>

            {showChoice && (
              <button
                onClick={() => navigate("/productForm")}
                className="text-gray-600  transition-colors"
                aria-label="Dashboard"
              >
                <LayoutDashboard size={20} />
              </button>
            )}

            {/* User Account Dropdown */}
            <div className="relative group/userAccount z-50 text-gray-600 cursor-pointer transition-all">
              <span
                href="#"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                }}
              >
                <UserRound size={20} />
              </span>

              <div className="absolute right-0 top-0 hidden group-hover/userAccount:block">
                <UserProfile />
              </div>
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-gray-600  transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Shopping Cart */}
            <Link
              to="/bag"
              className="relative text-gray-600  transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(-100vh)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(0)",
            }}
            exit={{
              opacity: 0,
              transform: "translateX(-100vh)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute top-16 bottom-0 md:hidden z-50 flex flex-col justify-start bg-white duration-500 transition pt-2 overflow-y-scroll cursor-pointer"
          >
            {shopCategories.map((item, index) => (
              //parent
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateX(-100vh)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0)",
                }}
                exit={{
                  opacity: 0,
                  transform: "translateX(-100vh)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                key={index}
                className=" p-2 min-w-[230px] md:min-w-[350px]"
              >
                <span
                  className="w-full flex justify-between hover:text-black hover:font-medium items-center lg:text-[20px] md:text-[18px] text-[15px]"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </span>
                {item && item.sublist && (
                  <div className=" w-full flex bg-white pt-2 pl-2">
                    {item.sublist && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          opacity: 1,
                          transform: "translateY(0)",
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className="flex flex-col gap-2 "
                      >
                        {item.sublist.map((subItem, subIndex) => (
                          <span
                            key={subIndex}
                            onClick={() => navigate(item.path + subItem.path)}
                            className="text-sm text-gray-600 hover:text-black"
                          >
                            {subItem.name}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

// // fixed
// <div className="h-16 relative z-50  ">
//       <div className="fixed lg:px-20 md:px-16 px-4 bg-white shadow-sm py-4 flex justify-between items-center w-full ">
//         {/* Left side - Logo and Navigation */}
//         <div className="flex items-center gap-8">
//           {/* Mobile menu button */}
//           <button className="md:hidden text-gray-700">
//             <Menu size={24} />
//           </button>

//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <h1 className="text-2xl font-bold text-amber-600">LaserCut</h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-8">
//             <Link
//               to="/"
//               className="text-gray-700  transition-colors font-medium"
//             >
//               Home
//             </Link>

//             {/* Shop Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center gap-1 text-gray-700  transition-colors font-medium">
//                 Shop
//                 <ChevronDown
//                   size={18}
//                   className="transition-transform group-hover:rotate-180 duration-200"
//                 />
//               </button>

//               {/* Dropdown Menu */}
//               <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
//                 {shopCategories.map((item, index) => (
//                   <div key={index} className="relative group/item">
//                     <button
//                       onClick={() => navigate(item.path)}
//                       className="w-full px-4 py-3 text-left text-gray-700 hover:bg-amber-50  flex justify-between items-center"
//                     >
//                       {item.name}
//                       {item.sublist && (
//                         <ChevronRight size={14} className="text-gray-400" />
//                       )}
//                     </button>

//                     {/* Sublist Dropdown */}
//                     {item.sublist && (
//                       <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-200">
//                         {item.sublist.map((subItem, subIndex) => (
//                           <button
//                             key={subIndex}
//                             onClick={() =>
//                               navigate(item.path + subItem.path)
//                             }
//                             className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-amber-50 "
//                           >
//                             {subItem.name}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <Link
//               to="/faqs"
//               className="text-gray-700  transition-colors font-medium"
//             >
//               FAQs
//             </Link>
//           </nav>
//         </div>

//         {/* Right side - Icons */}
//         <div className="flex items-center gap-6">
//           <button className="text-gray-600  transition-colors">
//             <Search size={20} />
//           </button>

//           {showChoice && (
//             <button
//               onClick={() => navigate("/productForm")}
//               className="text-gray-600  transition-colors"
//               aria-label="Dashboard"
//             >
//               <LayoutDashboard size={20} />
//             </button>
//           )}

//           {/* User Account Dropdown */}
//           <div className="relative group/userAccount z-50 text-gray-600 cursor-pointer transition-all">
//             <span
//               href="#"
//               onClick={() => {
//                 setIsProfileOpen(!isProfileOpen);
//               }}
//             >
//               <UserRound size={20} />
//             </span>

//             <div className="absolute right-0 top-0 hidden group-hover/userAccount:block">
//               <UserProfile />
//             </div>
//           </div>

//           {/* Wishlist */}
//           <Link
//             to="/wishlist"
//             className="relative text-gray-600  transition-colors"
//             aria-label="Wishlist"
//           >
//             <Heart size={20} />
//             {totalWishlistItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalWishlistItems}
//               </span>
//             )}
//           </Link>

//           {/* Shopping Cart */}
//           <Link
//             to="/bag"
//             className="relative text-gray-600  transition-colors"
//             aria-label="Shopping Cart"
//           >
//             <ShoppingCart size={20} />
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </div>
