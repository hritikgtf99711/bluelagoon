const Headings=({headings,classNames=""})=>{
return   <h2 className={`text-[var(--primary-color)] text-[36px] text-center uppercase font-[600] ${classNames}`}  data-gsap="fade-down" data-gsap-duration="1" data-gsap-delay="0.6">{headings}</h2>
}
export default Headings