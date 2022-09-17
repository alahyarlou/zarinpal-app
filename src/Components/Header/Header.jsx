import React, { useState } from "react";
// image
import logo from "../../assets/images/logo-white.svg";
// icon
import { BiMenuAltLeft } from "react-icons/bi";
// components
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  // toggle menu state
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between max-w-6xl mx-auto py-6 sticky top-0 z-50 bg-white transition duration-200 ease-in-out backdrop-blur-md backdrop-saturate-150 border-b border-b-gray-100/40 px-4 lg:px-0">
        <div className="px-2">
          <img src={logo} alt="لوگوی زرین پال" />
        </div>
        <div>
          {/* mobile */}
          <BiMenuAltLeft
            className="text-4xl cursor-pointer lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          {toggleMenu && <MobileNav closeClick={() => setToggleMenu(false)} />}
          {/* desktop */}
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
