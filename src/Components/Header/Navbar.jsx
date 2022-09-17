import React from "react";
import { BiChevronDown } from "react-icons/bi";
const Navbar = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      <li className="text-gray-700 cursor-pointer flex items-center item__menu">
        محصولات
        <BiChevronDown className="mr-2 text-xl" />
        <div className="bg-white absolute top-[70px] shadow-md rounded-md border-t-[8px] overflow-hidden border-t-yellow-200 py-4 px-3 content__menu">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
            <li className="flex flex-col hover:bg-blue-50/60 p-2 rounded-md gap-y-2 transition">
              <span className="font-bold">درگاه پرداخت</span>
              <span className="text-gray-600 text-sm">
                مهندسی شده برای فروش بیش تر
              </span>
            </li>
            <li className="flex flex-col hover:bg-blue-50/60 p-2 rounded-md gap-y-2 transition">
              <span className="font-bold">زرین کارت</span>
              <span className="text-gray-600 text-sm">
                طلایی ترین کارتِ بانکی
              </span>
            </li>
            <li className="flex flex-col hover:bg-blue-50/60 p-2 rounded-md gap-y-2 transition">
              <span className="font-bold">زرین لینک</span>
              <span className="text-gray-600 text-sm">
                لینک پرداخت در شبکه های اجتماعی
              </span>
            </li>
            <li className="flex flex-col hover:bg-blue-50/60 p-2 rounded-md gap-y-2 transition">
              <span className="font-bold">تسهیم</span>
              <span className="text-gray-600 text-sm">
                درگاه پرداخت اشتراکی
              </span>
            </li>
            <li className="flex flex-col hover:bg-blue-50/60 p-2 rounded-md gap-y-2 transition">
              <span className="font-bold">زرین پلاس</span>
              <span className="text-gray-600 text-sm">ابزار هوشمند سوددهی</span>
            </li>
          </ul>
        </div>
      </li>
      <li className="text-gray-700 cursor-pointer">تعرفه ها</li>
      <li className="text-gray-700 cursor-pointer">توسعه دهندگان</li>
      <li className="text-gray-700 cursor-pointer">تماس با ما</li>
      <li className="text-gray-700 cursor-pointer flex items-center item__menu">
        بیش تر
        <BiChevronDown className="mr-2 text-xl" />
        <div className="bg-white absolute top-[70px] shadow-md rounded-md border-t-[8px] overflow-hidden border-t-yellow-200 py-4 content__menu">
          <ul className="flex flex-col">
            <li className="cursor-pointer hover:bg-blue-50/60 flex-1 py-3 px-3">
              وبلاگ
            </li>
            <li className="cursor-pointer hover:bg-blue-50/60 flex-1 py-3 px-3">
              دریافت شماره شبا
            </li>
            <li className="cursor-pointer hover:bg-blue-50/60 flex-1 py-3 px-3">
              سوالات متداول
            </li>
            <li className="cursor-pointer hover:bg-blue-50/60 flex-1 py-3 px-3">
              اپلیکشن
            </li>
            <li className="cursor-pointer hover:bg-blue-50/60 flex-1 py-3 px-3">
              زرین بین
            </li>
          </ul>
        </div>
      </li>
      <li className="bg-blue-50 hover:bg-yellow-50 text-blue-800 font-medium px-7 py-3 rounded-full text-sm cursor-pointer transition">
        زرین پال من
      </li>
    </ul>
  );
};

export default Navbar;
