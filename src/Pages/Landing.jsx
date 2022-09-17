import React from "react";
import requestMoney from "../assets/images/home.svg";
import bottomArrow from "../assets/images/arrowbottom.svg";
import { FaChevronDown } from "react-icons/fa";
const Landing = () => {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="relative mx-4 ">
        <div className="flex items-center bg-gradient-to-br from-[#21254e] to-[#2b4a83] rounded-xl pt-10 pb-16 lg:p-7 relative">
          <div className="text-center lg:text-right">
            <h2 className="text-2xl md:text-4xl text-white font-YekanBakh font-extrabold block mb-5">
              بیش از 12 سال
            </h2>
            <h2 className="text-xl md:text-3xl text-white font-YekanBakh font-extrabold block mb-5">
              انتخاب مطمئنِ کسب و کارهای آنلاین
            </h2>
            <p className="px-3 text-sm md:text-lg md:px-6 lg:px-0 lg:text-xl leading-10 font-YekanBakh  text-white">
              زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و
              استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی،
              سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها
              ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در
              تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای
              ایفا کند.
            </p>
            <div className="flex mt-10 items-center justify-center lg:justify-start gap-5">
              <button className="bg-yellow-300 py-2 px-4 rounded-md font-bold">
                ثبت نام
              </button>
              <button className="bg-blue-50/20 text-white px-4 py-2 rounded-md">
                ورود
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-[2800px] h-[600px] mx-auto relative">
            <img
              src={requestMoney}
              alt="request money image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute -bottom-12 left-[20%] sm:left-[32%] md:left-[35%] lg:left-[44%] w-[200px]">
          <img src={bottomArrow} className="" alt="" />
          <FaChevronDown className="absolute top-8 left-[94px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
