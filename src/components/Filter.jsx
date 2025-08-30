import { div } from "framer-motion/m";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const options = [
  { label: "Price ( Low to High )", value: "low" },
  { label: "Price ( High to Low )", value: "high" },
  { label: "Latest", value: "latest" },
  { label: "Customer Rating", value: "rating" },
  { label: "A to Z", value: "atoz" },
];

function Filter({ text, sort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");
  const handleSelect = (e) => {
    sort(e.target.value);
  };

  return (
    <div className="lg:flex hidden justify-between items-center w-full mb-[20px] bg-white p-2 border border-gray-100">
      <div className="flex gap-[160px]">
        <p className="">FILTERS</p>
        <p>{text}</p>
      </div>
      <div className="flex gap-2 drop-shadow-md items-center z-50">
        <span >Sort by: </span>

        <div
          className="cursor-default w-[200px] h-[40px] border border-[#7C7C7C] rounded-[5px] flex justify-between items-center px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#3A3A3A]">{selected}</span>
          <span className="text-[#3A3A3A]">
            <ChevronDown />
          </span>
        </div>
        {isOpen && (
          <div className="cursor-default absolute top-12 right-0 bg-white w-[200px] border border-[#7C7C7C] rounded-[5px]">
            {options.map(({ label, value }, index) => (
              <p
                key={value}
                className={`hover:bg-[#fff2cc] border-[#7C7C7C] ${
                  index != 4 ? "border-b-1" : "border-b-0 rounded-b-[5px]"
                } ${
                  index == 0 ? "rounded-t-[5px]" : ""
                } border-l-0 border-r-0 border-t-0 border pl-[15px] py-2`}
                onClick={() => {
                  setSelected(label);
                  sort(value);
                  setIsOpen(!isOpen);
                }}
              >
                {label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
