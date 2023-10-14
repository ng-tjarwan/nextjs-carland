"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BiX, BiMenuAltRight } from "react-icons/bi";

import SearchMobile from "./SearchMobile";
import { SearchContext } from "../context/Search";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const { setSearchActive } = useContext(SearchContext);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      setHeader(window.screenY > 40);

      // search
      setSearchActive(window.screenY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSearchActive]);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      }
       fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            href="home"
            // smooth={desktopMode}
            // spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} width={194} height={64} alt="" />
          </Link>

          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:p-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            href="home"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            href="cars"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            href="#about"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            href="testimonials"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            href="contact"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            href="/"
            // smooth={desktopMode}
            // spy={true}
            // activeClass="active"
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
