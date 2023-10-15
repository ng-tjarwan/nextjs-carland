"use client";

import React, { useState, useEffect } from "react";

// react icons
import { FaChevronUp } from "react-icons/fa";

// react scroll
import { Link } from "react-scroll";

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      to="home"
      smooth={true}
      spy={true}
      className={`
      ${!isActive && "hidden"}
       fixed bg-accent hover:bg-accent-hover w-12 h-12 right-11 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white transition duration-300 ease-in-out`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
}
