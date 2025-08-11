import React from "react";
import Headings from "../../utils/Headings";
import Form from "../../utils/Form";
export default function Form_sec() {
  return (
    <section className="py-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 m-auto">
            <div className="heading_container text-center mb-[20px]">
              <img
                src="/assets/icons/icon_design.svg"
                className="m-auto mb-[30px]"
                alt="icon design"
              />
              <Headings
                classNames=" "
                headings={
                  <span>
                   Submit your expression<span className="lg:block"></span>of interest
                  </span>
                }
              />
              <ul className="mt-[35px]"  data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
                <li className="mb-[20px]"><a href="mailto:bluelagoon@vclgroup.in" className="inline-flex font-manrope"><img className="me-[14px]" src="/assets/icons/mail.svg" width={'22'} alt="mail"/><span class="font-manrope">bluelagoon@vclgroup.in </span></a></li>
                <li><a href="tel:+960 953 2525" className="inline-flex"><img className="me-[10px]" src="/assets/icons/phone.svg" width={'20'} alt="phone"/><span class="font-manrope">+960 953 2525</span></a></li>
              </ul>
            </div>
           
          </div>
           <div className="col-span-4"  data-gsap="clip-polygon" data-gsap-duration="1" data-gsap-delay="0.6">
                    <Form/>
            </div>
        </div>
      </div>
    </section>
  );
}
