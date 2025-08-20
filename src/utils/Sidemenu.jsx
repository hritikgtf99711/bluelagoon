import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidemenu({ onClick, openSideMenu, setopenSideMenu }) {
  return (
    <>
          <div className={`fixed top-0 ${  openSideMenu ? "block" : "hidden"} left-0 h-[100%] w-[100%] bg-[transparent]`} onClick={()=>setopenSideMenu(false)}></div>

    <div
      className={`h-[100vh] transition-all duration-300 ease-in-out ${
        openSideMenu ? "translate-x-[0%]" : "translate-x-[100%]"
      }  w-[70%] py-[80px] bg-[var(--secondary-color)] fixed top-0 right-0`}
    >
      <button
        onClick={() => setopenSideMenu(false)}
        className="absolute top-2 p-[20px] right-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          cla
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul>
        <li className="border-b-[1px] border-[#2351622b] px-[20px] py-[20px] text-[16px]">
          <NavLink
            className="text-[var(--primary-color)]  text-[18px]"
            to={import.meta.env.VITE_BASE_URL}
          >
            Home{" "}
          </NavLink>
        </li>
        <li className="border-b-[1px] border-[#2351622b] px-[20px] py-[20px] text-[16px]">
          <NavLink
            className="text-[var(--primary-color)]  text-[18px]"
            to={"about"}
          >
            About Us{" "}
          </NavLink>
        </li>
      </ul>

      <div className=" mt-[30px]">
        <button
          onClick={onClick}
          className="lg:text-[14px] text-[14px] !bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] !text-white uppercase mx-[20px]  m-[auto]   lg:px-8 lg:py-3 px-[30px] py-[10px]"
        >
          Book a Meeting
        </button>

        <ul
          className="lg:inline-block my-[30px]  flex lg:w-[auto] w-[100%] place-items-center justify-center gap-[20px]"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
        >
          <li className="bg-[var(--primary-color)] p-[10px] rounded-[50%]">
            <a
              target="_blank"
              href="https://www.instagram.com/vcilmauritius?utm_source=qr&igsh=OThnNnZ2dHgzdXd4"
            >
              <img
                className="w-[20px]"
                src="assets/icons/icon_video_color.svg"
                alt=""
              />
            </a>
          </li>
          <li className="bg-[var(--primary-color)] p-[10px] rounded-[50%]">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61579439157253&mibextid=ZbWKwL"
            >
              <img
                className="w-[20px]"
                src="assets/icons/icon_facebook_color.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}
