import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Sidemenu from '../utils/Sidemenu';
import { useLocation } from 'react-router';
export default function Header({openModal}) {
  const [active, setActive] = useState(false);
  const [openSideMenus,setopenSideMenu]=useState(false);
  const nav=useLocation();
  // console.log(nav)

  useEffect(() => {
    const handleScroll = () => {
       if(nav.pathname=="/"){
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    };
    if(nav.pathname=="/"){
      setActive(false);
    }else{
      setActive(true);
    }
    // if
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  const openSideMenu=()=>{
    setopenSideMenu(true)

  }
  return (
    <>
      <header className={`header__main  py-[30px] w-full absolute z-[999] top-0 ${active?'active':''}`}>
        <div className='container'>
          <div className='flex_div flex justify-between items-center'>
            <Link to={'/'}
              className='header__logo'
            >
              <img
                src={"/assets/images/logo.svg"}
                alt='logo'
                width={'180'}
                className='2xl:w-[180px] logo w-[150px] '
              />
            </Link>
            <ul className={`menu__list flex gap-[30px] uppercase ml-[auto] me-[30px] tracking-[2px]`}>
              {/* <li><Link className='text-white'  to={'#'}>Home </Link></li>
              <li><Link className='text-white'  to={'#'}>Projects </Link></li> */}
              <li><Link className='text-white lg:block hidden text-[14px]'  to={'/about'}>About Us </Link></li>
              <li><Link className='text-white lg:block hidden text-[14px]'  onClick={openModal} to={'#'}> Contact us </Link></li>
            </ul>
            <button
            onClick={openModal}
              className='lg:text-[14px] text-[14px] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:block hidden lg:px-8 lg:py-3 px-[10px] py-[10px]'
            >Book a Meeting</button>
            <img src='/assets/icons/icon_ham_menu.svg' onClick={openSideMenu} alt='ham_menu' className='lg:hidden block' width={'60px'}/>
          </div>
        </div>
                <Sidemenu openSideMenu={openSideMenus} setopenSideMenu={setopenSideMenu}  onClick={openModal}/>
      </header>
    </>
  )
}
