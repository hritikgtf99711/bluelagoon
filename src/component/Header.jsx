import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useOutletContext } from 'react-router-dom';
export default function Header({openModal}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
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
              />
            </Link>
            <ul className={`menu__list flex gap-[30px] uppercase ml-[auto] me-[30px] tracking-[2px]`}>
              <li><Link className='text-white'  to={'#'}>Home </Link></li>
              <li><Link className='text-white'  to={'#'}>Projects </Link></li>
              <li><Link className='text-white'  to={'#'}>About Us </Link></li>
              <li><Link className='text-white'  to={'#'}> Contact us </Link></li>
            </ul>
            <button
            onClick={openModal}
              className='lg:text-[14px] text-[14px] bg-[var(--primary-color)]  book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-9 lg:py-3'
            >Book a Meeting</button>
          </div>
        </div>
      </header>
    </>
  )
}
