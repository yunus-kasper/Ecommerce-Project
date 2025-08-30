import React, { useEffect, useState } from "react";
import AccountSidebar from "../components/AccountSidebar";
import AddressForm from "../components/forms/AddressForm";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";
import { Edit, Phone, Plus, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

function Address() {
  const [open, setOpen] = useState(false);
  // const [addresses, setAddresses] = useState();
  const [editingAddress, setEditingAddress] = useState(null);

  const closeDialog = () => {
    setOpen(false);
    setEditingAddress(null);
  };

  const stored = localStorage.getItem("savedAddresses");
  const addresses = stored ? JSON.parse(stored) : [];

  console.log(addresses);

  // const addresses = localStorage.getItem("savedAddresses")

  // const fetchAddresses = async () => {
  //   try {
  //     const res = await axiosInstance.get("/addresses", {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     console.log("res.data => ", res.data);
  //     setAddresses(res.data.addresses);
  //   } catch (err) {
  //     console.error("Failed to fetch addresses", err);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axiosInstance.delete(`/addresses/${id}`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     });
  //     toast.success("Address Deleted Successfully");
  //     fetchAddresses();
  //   } catch (err) {
  //     console.error("Delete failed", err);
  //   }
  // };

  // const handleEdit = (address) => {
  //   setEditingAddress(address);
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   fetchAddresses();
  // }, []);

  return (
    <>
      <Navbar />
      <section className="lg:px-20 md:px-12 px-4 py-8 bg-gray-50 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-4 mx-auto">
          <div className="max-lg:hidden">
            <AccountSidebar />
          </div>

          <div className="flex-1 font-inter">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white rounded-lg shadow-sm ">
              <h1 className="text-xl font-medium text-gray-800 font-inter">
                Saved Addresses ({addresses?.length || 0})
              </h1>
              {/* <p className="text-gray-500 mt-1">
                  {addresses?.length || 0} saved address
                  {addresses?.length !== 1 ? "es" : ""}
                </p> */}
              <button
                className="flex items-center text-sm gap-2 px-4 py-2 bg-[#212121] text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
                onClick={() => setOpen(true)}
              >
                <Plus size={16} />
                Address
              </button>
            </div>

            {/* Address List */}
            <div className="mt-6">
              {addresses?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {addresses.map((add) => (
                    <div
                      key={add.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col h-full"
                    >
                      {/* Card Header with Accent */}
                      <div
                        className={`h-0.5 rounded-full  ${
                          add.addressType?.toLowerCase() === "home"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                        }`}
                      ></div>

                      <div className="p-5 flex-grow">
                        {/* Address Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-2">
                            <h2 className="text-lg font-medium text-gray-900 capitalize">
                              {add.fullName}
                            </h2>
                            <span
                              className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                                add.addressType?.toLowerCase() === "home"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {add.addressType}
                            </span>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="flex items-center gap-2 text-gray-600 mb-5">
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate">{add.mobile}</span>
                        </div>

                        {/* Address Details */}
                        <div className="text-gray-700 space-y-2 text-sm">
                          <p className="line-clamp-2">{add.street}</p>
                          <p>
                            {add.city}, {add.state} - {add.pincode}
                          </p>
                          {add.landmark && (
                            <p className="text-gray-500 text-sm">
                              <span className="font-medium">Landmark:</span>{" "}
                              {add.landmark}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="px-5 pb-5 mt-auto">
                        <div className="flex rounded-lg bg-gray-50 p-1">
                          <button
                            onClick={() => handleEdit(add)}
                            className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 rounded-md hover:bg-white"
                          >
                            <Edit size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(add.id)}
                            className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-700 hover:text-red-600 font-medium text-sm transition-colors duration-200 rounded-md hover:bg-white"
                          >
                            <Trash2 size={16} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add New Address Card */}
                  <div
                    className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors duration-200 h-full"
                    onClick={() => setOpen(true)}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Add New Address
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      Click to add a new delivery address
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center max-w-md mx-auto">
                  <MapPin className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Saved Addresses
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    You haven't saved any addresses yet
                  </p>
                  <button
                    className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg text-sm transition-colors duration-200 shadow-sm"
                    onClick={() => setOpen(true)}
                  >
                    Add Your First Address
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Address Form Modal */}
        {open && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="relative">
              <AddressForm onClose={closeDialog} initialData={editingAddress} />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Address;

// <section className="lg:px-20 md:px-[60px] px-4 py-[26px]">
//   <div className="flex justify-between gap-4">
//     <AccountSidebar />

//     <div className="w-full">
//       <div className="flex justify-between p-4 shadow-md items-center">
//         <h1>Saved Addresses</h1>
//         <button
//           className="px-4 py-1 text-[18px] text-[#EBB100] border border-[#C8C8C8]"
//           onClick={() => setOpen(true)}
//         >
//           + ADD NEW ADDRESSES
//         </button>
//       </div>

//       {/* Render addresses */}
//       <div className="my-4">
//         {addresses?.map((add) => (
//           <div className="shadow-md my-2" key={add.id}>
//             {/* Header */}
//             <div className="px-4 flex justify-between">
//               <h1 className="text-[#767676] font-semibold">
//                 {add.fullName}
//               </h1>

//               {/* Tag (Home/Office etc.) */}
//               <span className="bg-[#E9E9E9] text-[#7C7C7C] px-2 py-0.5 rounded-sm">
//                 {add.addressType?.toUpperCase()}
//               </span>
//             </div>

//             {/* Address details */}
//             <div className="px-4 flex flex-col gap-2 text-[#949494]">
//               <p className="w-[20ch]">
//                 {add.street}, {add.city}, {add.state} {add.pincode}
//               </p>
//               <p>{add.mobile}</p>
//             </div>

//             {/* Buttons */}
//             <div className="flex mt-4">
//               <button
//                 onClick={() => handleEdit(add)}
//                 className="w-[50%] py-2 border border-[#E3E3E3] text-[#EBB100] rounded-sm"
//               >
//                 EDIT
//               </button>
//               <button
//                 onClick={() => handleDelete(add.id)}
//                 className="w-[50%] py-2 border border-[#E3E3E3] text-[#EBB100] rounded-sm"
//               >
//                 REMOVE
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {open && (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//       <div className="relative">
//         <AddressForm
//           onClose={closeDialog}
//           // onSuccess={fetchAddresses}
//           initialData={editingAddress}
//         />
//       </div>
//     </div>
//   )}
// </section>
