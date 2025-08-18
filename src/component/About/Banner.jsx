import ArtisticImpression from "../../utils/ArtisticImpression";
export default function Banner() {
  return (
    <section className='bg-[url("/assets/images/about/about_banner_1.webp")] bg-[bottom] relative h-[60vh] lg:h-[80vh] bg-[cover]'>
      <div className="image_overlay bg-gradient-to-b from-[#00000087] from-60% to-transparent lg:bg-[linear-gradient(45deg,#000000b0,transparent)]  absolute top-0 left-0 h-[100%] w-[100%]"></div>
      <div className="container relative flex place-items-center  lg:justify-start justify-center h-[100%]">
        <h1 class=" heading-text lg:mt-[auto] lg:pb-[180px] tracking-[2px] lg:!text-[54px] !text-[40px] leading-[1.3] uppercase text-center font-[600]">
          <span className="bg-gradient-to-t from-[#5b90ca40]  to-white text-transparent bg-clip-text">
            About us
          </span>
        </h1>
      </div>
      <ArtisticImpression />
    </section>
  );
}
