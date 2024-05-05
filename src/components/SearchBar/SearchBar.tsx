"use client";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/store/reducers/filter";

const SearchBar = ({ restaurant }: { restaurant: any }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute w-full h-[55px] bottom-[16%] flex justify-center items-center">
        <div
          style={{ backgroundColor: restaurant.backgroundColor }}
          className="relative w-8/12 h-full rounded-3xl px-5"
        >
          <input
            type="text"
            placeholder="Search for a dish"
            style={{
              caretColor: restaurant.secondaryColor,
              backgroundColor: restaurant.backgroundColor,
              color: restaurant.secondaryColor,
            }}
            className="outline-none w-full h-full placeholder-white"
          />
          <div className="absolute top-[18px] right-[70px] cursor-pointer">
            <BiSearchAlt color="white" size={24} />
          </div>
          <div
            onClick={() => dispatch(toggleShow())}
            style={{ backgroundColor: restaurant.secondaryColor }}
            className="absolute top-2 right-2 py-2 px-3 rounded-2xl cursor-pointer"
          >
            <RxHamburgerMenu color="white" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
