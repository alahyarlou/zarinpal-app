import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiLeftArrowAlt } from "react-icons/bi";

const MobileNav = ({ closeClick }) => {
  return (
    <>
      <div
        className="bg-slate-600/40 top-0 fixed w-full h-screen z-[100] cursor-pointer"
        onClick={closeClick}
      ></div>
      <ul className="flex flex-col items-start gap-4 bg-white lg:hidden w-full absolute top-0 z-[101] transition duration-200 ease-in-out sidebarMenu ">
        <div className="w-full p-2 text-left">
          <IoCloseSharp
            className="text-3xl m-2 inline-block cursor-pointer"
            onClick={closeClick}
          />
        </div>
        <li className="text-gray-700 cursor-pointer pr-5">تعرفه ها</li>
        <li className="text-gray-700 cursor-pointer w-[87%] border-b pb-4 mr-5">
          اپلیکشن
        </li>
        <li className="text-gray-700 cursor-pointer pr-5">سوالات متداول</li>
        <li className="text-gray-700 cursor-pointer pr-5">محصولات</li>
        <li className="text-gray-700 cursor-pointer pr-5">تماس با ما</li>
        <li className="flex items-center p-6 bg-gray-100 text-blue-900 w-full">
          زرین پال من
          <BiLeftArrowAlt />
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
