import React from "react";
import { twMerge } from "tailwind-merge";
twMerge

function Title({children, subtitle, heading="", subHeading="", className=""}) {
  return (
    <div className={twMerge("flex flex-col w-full", className)}>
      <h1 className={twMerge("md:text-2xl text-[20px] py-[10px] font-semibold", heading)}>
        {children}
      </h1>
      {subtitle && (
        <p className={twMerge("md:text-[20px] text-[10px]", subHeading)}>{subtitle}</p>
      )}
    </div>
  );
}

export default Title;
