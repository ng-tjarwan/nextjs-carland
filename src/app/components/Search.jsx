"use client";

import { useContext } from "react";
import { SearchContext } from "../context/Search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "rounded-none xl:h-[80px]"
          : "rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } bg-white hidden xl:block w-full relative shadow-lg`}
    >
      <div
        className={`${
          searchActive && "container mx-auto"
        } h-full flex items-center px-6 xl:px-0`}
      >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        {/* btn */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive ? "btn-sm xl:w-[164px]" : "btn-lg xl:w-[184px]"
            } btn btn-accent hover:bg-accent-hover`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
