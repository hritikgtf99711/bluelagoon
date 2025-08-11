import React, { useEffect, useState } from 'react'
import Sidemenu from '../utils/Sidemenu';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router';
export default function Header({openModal}) {
  const [active, setActive] = useState(false);
  const [openSideMenus,setopenSideMenu]=useState(false);
  const nav=useLocation();

  useEffect(() => {
    const handleScroll = () => {
       if(nav.pathname==import.meta.env.VITE_BASE_URL || nav.pathname==import.meta.env.VITE_BASE_URL+"/about"){
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    };
   
    if(nav.pathname==import.meta.env.VITE_BASE_URL || nav.pathname==import.meta.env.VITE_BASE_URL+"about"){
      setActive(false);
    }else{
      setActive(true);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nav.pathname])
  const openSideMenu=()=>{
    setopenSideMenu(true)

  }
   useEffect(()=>{
setopenSideMenu(false);
 setTimeout(()=>{
                 window.scrollTo(0, 0)
                },200)
    },[nav.pathname])
  return (
    <>
      <header className={`header__main  py-[15px] lg:py-[30px] w-full absolute z-[999] top-0 ${active?'active':''}`}>
        <div className='container'>
          <div className='flex_div flex justify-between items-center'>
            <NavLink to={import.meta.env.VITE_BASE_URL}
            className='header__logo'
            >
              <img
                src={"assets/images/logo.svg"}
                alt='logo'
                width={'180'}
                className='2xl:w-[180px] logo w-[130px] '
              />
            </NavLink>
            <ul className={`menu__list flex gap-[30px] uppercase ml-[auto] me-[30px] tracking-[2px]`}>
               <li><NavLink className='text-white lg:block hidden text-[14px]'  to={import.meta.env.VITE_BASE_URL}>Home </NavLink></li>
              <li><NavLink className='text-white lg:block hidden text-[14px]'  to={'about'}>About Us </NavLink></li>
              <li><NavLink className='text-white lg:block hidden text-[14px]'  onClick={openModal} to={'#'}> Contact us </NavLink></li>
            </ul>
            <button
            onClick={openModal}
              className='lg:text-[14px] text-[14px] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:block hidden lg:px-8 lg:py-3 px-[10px] py-[10px]'
            >Book a Meeting</button>
            <img src='assets/icons/icon_ham_menu.svg' onClick={openSideMenu} alt='ham_menu' className='lg:hidden block' width={'60px'}/>
          </div>
        </div>
                <Sidemenu openSideMenu={openSideMenus} setopenSideMenu={setopenSideMenu}  onClick={openModal}/>
      </header>
    </>
  )
}
