import Headings from "../../utils/Headings";
const Typology = () => {
  return (
    <section className="bg-[url('/assets/images/home/typology/typology-banner.jpg')] bg-[cover] py-[80px] pb-[70px]">
      <div className="heading_container text-center mb-[20px]">
        <img
          src="/assets/icons/icon_design_secondary.svg"
          className="m-auto mb-[20px]"
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.6"
          alt="icon design"
        />
        <div data-gsap="fade-up" data-gsap-duration="1" data-gsap-delay="0.6">
          <Headings
            classNames=" text-[var(--secondary-color)] "
            headings={"typology"}
          />
        </div>
      </div>
      <div className="container typology-point mt-[30px] !lg:mt-[50px]">
        <div className="grid grid-cols-2 lg:grid-cols-7 ">
          <div
            className="col-span type_itm text-center"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            <h3 className="text-white text-[20px] lg:text-[24px] py-[30px] font-[500]">
              2 bhk
            </h3>
          </div>
          <div
            className="lg:block  lg:relative  hidden  col-span-1 lg:col-span h-[100%] m-[auto] bg-[linear-gradient(0deg,rgba(26,74,91,0)_0%,#EDE7D3_49.5192%,rgba(26,74,91,0)_100%)]  w-[1px] verticle_gr"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          ></div>
          <div
            className="col-span  type_itm text-center"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            <h3 className="text-white text-[20px] lg:text-[24px] py-[30px] font-[500]">
              2 bhk Large
            </h3>
          </div>
          <div
            className="lg:block lg:relative  hidden col-span-1 lg:col-span h-[100%] m-[auto] bg-[linear-gradient(0deg,rgba(26,74,91,0)_0%,#EDE7D3_49.5192%,rgba(26,74,91,0)_100%)]  w-[1px] verticle_gr"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          ></div>
          <div
            className="col-span type_itm text-center"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            <h3 className="text-white text-[20px] lg:text-[24px] py-[30px] font-[500]">
              2+1 bhk
            </h3>
          </div>
          <div
            className="lg:block lg:relative  hidden col-span h-[100%] m-[auto] bg-[linear-gradient(0deg,rgba(26,74,91,0)_0%,#EDE7D3_49.5192%,rgba(26,74,91,0)_100%)]  w-[1px] verticle_gr"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          ></div>
          <div
            className="col-span  text-center"
            data-gsap="fade-down"
            data-gsap-duration="1"
            data-gsap-delay="0.6"
          >
            <h3 className="text-white text-[20px] lg:text-[24px] py-[30px] font-[500]">
              3 bhk
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Typology;
