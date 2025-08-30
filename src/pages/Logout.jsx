import React from "react";
import Button from "../components/Button";
import { CirclePower } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

function Logout({ onCancel, onConfirm }) {
  return (
    <>
      <section className="lg:px-20 md:px-[60px] px-4">
        <div className="h-max flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-[30px]">Log Out</h1>
            <div className="flex flex-col items-center gap-2">
              <span className="p-1 text-center">
                <CirclePower className="text-[#EBB100] p-2 bg-[#ECEFF3] rounded-full " size={40}/>
              </span>
              <p className="text-[15px]">Are you sure you want to log out?</p>
            </div>
            <div className="flex w-full gap-2">
              <div onClick={onCancel} className="flex w-full">
                <Button
                  cart={true}
                  className="px-6 py-2 whitespace-nowrap justify-center"
                  btnClass="flex-1"
                >
                  Cancel
                </Button>
              </div>
              <div onClick={onConfirm} className="w-full flex">
                <Button className="px-6 py-2 justify-center" btnClass="flex-1">
                  Log Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logout;
