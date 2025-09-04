import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filter = ({ data }) => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }
  const allSizes = [...new Set(data.flatMap(item => item.Size))];

  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="border-b border-gray-300">
        <div
          className="flex justify-between items-center py-4 px-5 cursor-pointer text-[12px] font-bold uppercase"
          onClick={toggleMenu}
        >
          Size
          <IoIosArrowDown
            className={`transform transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <ul
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-60" : "max-h-0"
          }`}
        >
          {allSizes.map((size, i) => (
            <li
              key={i}
              className="py-[7px] px-5 text-[11px] font-bold uppercase hover:bg-gray-100"
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
