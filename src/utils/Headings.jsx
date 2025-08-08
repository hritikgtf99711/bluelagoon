const Headings=({headings,classNames=""})=>{
return   <h2 className={`text-[var(--primary-color)] text-[32px] tracking-[1.8] text-center uppercase font-[600] ${classNames}`}  data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6">{headings}</h2>
}
export default Headings