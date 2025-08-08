import React from "react";
import Headings from "../utils/Headings";
import { NavLink } from "react-router-dom";
export default function Thankyou() {
  return (
    <section className="py-[300px]">
      <div className="container">
        <Headings classNames="!text-[35px]" headings={"Thank You"} />
        <div className="text-center">
          <p className="font-manrope mt-[4px]">Thank you for submitting your details.</p>
          <p className="font-manrope mt-[15px] ">
            Our professional shall get in touch with you within two working
            hours. Stay with us.
          </p>
          <NavLink to="/" className="inline-block lg:text-[14px] text-[14px] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase mx-[20px] my-[30px] m-[auto]   lg:px-8 lg:py-3 px-[30px] py-[10px]">Book to Home</NavLink>
        </div>
      </div>
    </section>
  );
}
