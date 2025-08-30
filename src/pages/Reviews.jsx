import React from "react";
import AccountSidebar from "../components/AccountSidebar";
import MyReviews from "../components/MyReviews";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

function Reviews() {
  return (
    <>
      <Navbar></Navbar>
      <section className="lg:px-20 md:px-[60px] px-4 py-8 bg-gray-50">
        <div className="flex justify-between gap-4">
          {/* Sidebar */}
          <div className="max-lg:hidden">
            <AccountSidebar />
          </div>

          {/* My Reviews */}
          <MyReviews />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Reviews;
