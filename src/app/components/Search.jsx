"use client";

import { useContext } from "react";
import { SearchContext } from "../context/Search";
import LocationSelection from "./LocationSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "rounded-none xl:h-[80px]"
          : "rounded-[20px] py-6 xl:h-[98px]"
      } bg-white hidden xl:block w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
}
