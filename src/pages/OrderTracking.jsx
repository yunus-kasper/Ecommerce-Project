import { useState } from "react";
import AccountSidebar from "../components/AccountSidebar";
import {
  Calendar,
  Check,
  Clock,
  Headset,
  Mail,
  MessageCircle,
  MessageCircleQuestion,
  Phone,
  Truck,
} from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useParams } from "react-router";
import orders from "../data/orders.json";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const steps = [
  "Order Placed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function OrderTracking() {
  const { orderId } = useParams();
  const order = orders.find((val) => val.orderId === orderId);
  const [trackOrder, setTrackOrder] = useState(order.orderStatus);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const status = trackOrder.toLowerCase();
    console.log(status);

    if (
      steps[1].replace(/\s/g, "").toLowerCase() === status.replace(/\s/g, "")
    ) {
      setActive(25);
    } else if (
      steps[2].replace(/\s/g, "").toLowerCase() === status.replace(/\s/g, "")
    ) {
      setActive(50);
    } else if (
      steps[3].replace(/\s/g, "").toLowerCase() === status.replace(/\s/g, "")
    ) {
      setActive(75);
    } else if (
      steps[4].replace(/\s/g, "").toLowerCase() === status.replace(/\s/g, "")
    ) {
      setActive(100);
    } else if (
      steps[0].replace(/\s/g, "").toLowerCase() === status.replace(/\s/g, "")
    ) {
      setActive(1);
    } else setActive(0);
  }, [trackOrder]); // ✅ depends on trackOrder

  return (
    // <section className="lg:px-20 md:px-[60px] px-4 py-[26px]">
    //   <div className="flex justify-between gap-4">
    //     {/* Sidebar */}
    //     <AccountSidebar />

    //     {/* Order Track bar */}
    //     <div className="w-full h-max">
    //       <div className="w-full shadow-md p-4 h-max mt-10">
    //         <div className="relative w-full h-2 bg-[#C6CDD5] rounded-full">
    //           <Check
    //             className={`absolute z-20 -top-1.5 p-1 -left-[1px] text-white rounded-full  ${
    //               active > 0 ? "bg-[#19A971]" : "bg-[#C6CDD5]"
    //             } `}
    //             size={20}
    //           />
    //           <Check
    //             className={`absolute z-20 -top-1.5 left-[33%] p-1 ${
    //               active >= 33 ? "bg-[#19A971]" : "bg-[#C6CDD5]"
    //             } text-white rounded-full transition-all duration-200 delay-75`}
    //             size={20}
    //           />
    //           <Check
    //             className={`absolute z-20 -top-1.5 left-[66%] p-1 ${
    //               active >= 66 ? "bg-[#19A971]" : "bg-[#C6CDD5]"
    //             } text-white rounded-full transition-all duration-200 delay-100`}
    //             size={20}
    //           />
    //           <Check
    //             className={`absolute z-20 -top-1.5 right-0 p-1 ${
    //               active >= 100 ? "bg-[#19A971]" : "bg-[#C6CDD5]"
    //             } text-white rounded-full transition-all duration-200 delay-150`}
    //             size={20}
    //           />

    //           <span className={`absolute bottom-3 p-1 rounded-full`}>
    //             Order Placed
    //           </span>
    //           <span className={`absolute bottom-3 left-[33%] p-1 rounded-full`}>
    //             Processing
    //           </span>
    //           <span className={`absolute bottom-3 left-[66%] p-1 rounded-full`}>
    //             Shipped
    //           </span>
    //           <span className={`absolute bottom-3 right-0 p-1 rounded-full`}>
    //             Delivered
    //           </span>
    //           <AnimatePresence>
    //             <motion.div
    //               initial={false}
    //               animate={{ width: `${active}%` }}
    //               transition={{ duration: 0.5, ease: "easeInOut" }}
    //               className="h-2 absolute bg-[#19A971] z-10 rounded-full"
    //             />
    //           </AnimatePresence>
    //           <div className=" absolute right-1 top-10 bg-white px-4 py-1 z-10 rounded-sm shadow-md">
    //             {" "}
    //             Stay Updated at each steps
    //           </div>
    //         </div>
    //         <div className="mt-[80px] flex justify-between">
    //           <div className="flex flex-col gap-4">
    //             <h1>📦 Shipping Address and Carrier Information</h1>
    //             <div className="flex flex-col gap-2">
    //               <p>
    //                 <span className="text-[#A6A6A6]">Carrier:</span> Shipped via
    //                 FedEx
    //               </p>
    //               <p>
    //                 <span className="text-[#A6A6A6]">Shipping Address:</span>{" "}
    //                 123 Toy Lane, Toy City, TX 12345
    //               </p>
    //               <p>
    //                 <span className="text-[#A6A6A6]">Tracking Number:</span>{" "}
    //                 12345678910
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex flex-col gap-4">
    //             <h1>Estimated Delivery Date</h1>
    //             <div className="flex flex-col gap-2">
    //               <p>
    //                 <span className="text-[#A6A6A6]">Estimated Date:</span>{" "}
    //                 September 12–14, 2024
    //               </p>
    //               <p>
    //                 <span className="text-[#A6A6A6]">Shipping Address:</span>{" "}
    //                 123 Toy Lane, Toy City, TX 12345
    //               </p>
    //               <p>
    //                 <span className="text-[#A6A6A6]">Tracking Number:</span>{" "}
    //                 12345678910
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex flex-col gap-4">
    //             <h1>Tracking Updates</h1>
    //             <div className="flex flex-col gap-2">
    //               <p>
    //                 <span className="text-[#A6A6A6]">Date:</span> Shipped via
    //                 FedEx
    //               </p>
    //               <p className="text-[#FFD528] flex gap-2 items-center text-[14px]">
    //                 <Info size={16} /> Your package is out for delivery
    //               </p>
    //               <Button className="flex-1 px-4 py-2 group justify-center">
    //                 <MapPin className="group-hover:text-[#C19403]" /> Track
    //                 Order
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex gap-4 mt-14 border border-[#A2A2A2] border-b-0 border-r-0 border-l-0 py-6 shadow-md px-4 h-max ">
    //         <div className="flex flex-col gap-2 min-w-[381px] max-w-[381px] mt-10">
    //           <h1 className="flex gap-2 items-center">
    //             <Phone size={20} /> Contact for Issues
    //           </h1>
    //           <p className="text-[10px] text-left text-[#A6A6A6]">
    //             If you have any questions or concerns about your order, please
    //             contact our support team at{" "}
    //             <span className="text-[#D3AB2D]">
    //               support@LaserCutMetalWallArthelp.com
    //             </span>
    //             or call us at +1-800-555-1234. Our team is available 24/7 to
    //             assist you with any issues you may have. We are committed to
    //             delivering the best customer service and ensuring your
    //             satisfaction with our products and services.
    //           </p>
    //           <div className="flex gap-2">
    //             <div className="bg-[#F9DB6066] p-1 h-max">
    //               <Headset className="text-[#C19403]" />
    //             </div>
    //             <div>
    //               <h1>24/7 Customer Support</h1>
    //               <p className="text-[#A6A6A6] text-[9px]">
    //                 Our dedicated support team is here to help you around the
    //                 clock.
    //               </p>
    //             </div>
    //           </div>

    //           <Button className="justify-center py-2 group ">
    //             <MessageCircleQuestionMark className="group-hover:text-[#C19403]" />{" "}
    //             Contact Us
    //           </Button>
    //         </div>

    //         {/* Map */}
    //         <div className="w-full">
    //           <iframe
    //             className="w-full h-full"
    //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.038583228666!2d77.3822129!3d28.5923125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef91f5153683%3A0x5a196bf40461160d!2siThums%2073%2C%20Noida!5e1!3m2!1sen!2sin!4v1748350042204!5m2!1sen!2sin"
    //             loading="lazy"
    //             referrerpolicy="no-referrer-when-downgrade"
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <Navbar />
      <section className="lg:px-20 md:px-[60px] px-4 py-8 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <AccountSidebar />

          {/* Main Content */}
          <div className="w-full">
            {/* Order Tracking Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Order #{order.orderId} Tracking
              </h1>

              {/* Progress Tracker */}
              <div className="relative w-full">
                <div className="flex justify-between mb-2">
                  <span
                    className={`text-sm ${
                      active > 0 ? "text-[#19A971]" : "text-gray-400"
                    }`}
                  >
                    Order Placed
                  </span>
                  <span
                    className={`text-sm ${
                      active >= 25 ? "text-[#19A971]" : "text-gray-400"
                    }`}
                  >
                    Processing
                  </span>
                  <span
                    className={`text-sm ${
                      active >= 50 ? "text-[#19A971]" : "text-gray-400"
                    }`}
                  >
                    Shipped
                  </span>
                  <span
                    className={`text-sm ${
                      active >= 75 ? "text-[#19A971]" : "text-gray-400"
                    }`}
                  >
                    Out for Delivery
                  </span>
                  <span
                    className={`text-sm ${
                      active >= 100 ? "text-[#19A971]" : "text-gray-400"
                    }`}
                  >
                    Delivered
                  </span>
                </div>

                <div className="relative w-full h-3 bg-gray-200 rounded-full">
                  <AnimatePresence>
                    <motion.div
                      initial={false}
                      animate={{ width: `${active}%` }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="h-3 absolute bg-gradient-to-r from-[#19A971] to-[#2ECC71] z-10 rounded-full"
                    />
                  </AnimatePresence>

                  {[0, 25, 50, 75, 100].map((position) => (
                    <div
                      key={position}
                      className={`absolute z-20 -top-1.5 transform -translate-x-1/2 ${
                        position === 0
                          ? "left-0"
                          : position === 100
                          ? "left-[100%]"
                          : ""
                      }`}
                      style={
                        position !== 0 && position !== 100
                          ? { left: `${position}%` }
                          : {}
                      }
                    >
                      <div
                        className={`p-1 rounded-full ${
                          active >= position ? "bg-[#19A971]" : "bg-gray-300"
                        } shadow-sm`}
                      >
                        <Check className="text-white" size={16} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute right-0 top-10 bg-white px-3 py-1.5 rounded-md shadow-xs border border-gray-100 text-sm text-gray-600">
                  Stay updated at each step
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shipping Info */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Truck className="text-[#EBB100]" size={18} /> Shipping
                  Information
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Carrier</p>
                    <p className="font-medium">FedEx Ground</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Shipping Address</p>
                    <p className="font-medium">
                      {order.deliveryAddress.addressLine1},{" "}
                      {order.deliveryAddress.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tracking Number</p>
                    <p className="font-medium">{order.trackingId}</p>
                  </div>
                </div>
              </div>

              {/* Delivery Estimate */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="text-[#EBB100]" size={18} /> Delivery
                  Estimate
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Estimated Date</p>
                    {/* <p className="font-medium">September 12–14, 2024</p> */}
                    <p className="font-medium">{order.deliveryDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Current Status</p>
                    <p className="font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                      {order.orderStatus}
                    </p>
                  </div>
                  <button className="mt-4 w-full flex items-center justify-center py-2 group bg-[#EBB100] hover:bg-[#EBA100] text-white">
                    <MapPin className="mr-2 group-hover:text-white" size={16} />
                    Track Package
                  </button>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="text-[#EBB100]" size={18} /> Recent Updates
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#EBB100] mt-1"></div>
                      <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{order.orderStatus}</p>
                      <p className="text-xs text-gray-500">Today, 9:42 AM</p>
                      <p className="text-xs mt-1 text-gray-600">
                        Your package is on its way to you
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-[#EBB100] mt-1"></div>
                      <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Departed facility</p>
                      <p className="text-xs text-gray-500">
                        Yesterday, 5:18 PM
                      </p>
                      <p className="text-xs mt-1 text-gray-600">
                        Dallas, TX distribution center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="p-6 lg:w-1/2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Headset className="text-[#EBB100]" size={20} /> Need Help
                    With Your Order?
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Our customer support team is available 24/7 to assist you
                    with any questions or concerns about your order.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#EBB100]/10 p-2 rounded-full">
                        <MessageCircle className="text-[#EBB100]" size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Live Chat</h3>
                        <p className="text-xs text-gray-500">
                          Get instant help from our support team
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#EBB100]/10 p-2 rounded-full">
                        <Mail className="text-[#EBB100]" size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Email Us</h3>
                        <p className="text-xs text-gray-500">
                          support@lasercutmetal.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#EBB100]/10 p-2 rounded-full">
                        <Phone className="text-[#EBB100]" size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Call Us</h3>
                        <p className="text-xs text-gray-500">
                          +1 (800) 555-1234
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 flex items-center px-4 justify-center py-2.5 group border border-[#EBB100] text-[#EBB100] hover:bg-[#EBB100] hover:text-white transition-colors">
                    <MessageCircleQuestion
                      className="mr-2 group-hover:text-white"
                      size={16}
                    />
                    Contact Support
                  </button>
                </div>

                {/* Map */}
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.038583228666!2d77.3822129!3d28.5923125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef91f5153683%3A0x5a196bf40461160d!2siThums%2073%2C%20Noida!5e1!3m2!1sen!2sin!4v1748350042204!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default OrderTracking;
