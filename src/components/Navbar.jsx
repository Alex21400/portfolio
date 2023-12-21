import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex items-center py-5 fixed top-0 z-20 glass`}>
      <div className={`${styles.paddingX}  w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <Link
          to={'/'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo.png" className='w-10 h-10 object-cover' />
          <p className='text-white text-2xl font-semibold cursor-pointer'>Alex</p>
        </Link>

        {/* LARGE SCREENS */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li 
            key={link.id}
            className={`${active === link.title ? 'text-white' : 'text-primary'} hover:text-white text-lg font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <div onClick={() => setToggle(!toggle)}>
              {toggle ? <IoClose size={30}/> : <GiHamburgerMenu size={28}/>}
            </div>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-8 absolute bg-black-200 top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map(link => (
                  <li
                    key={link.id}
                    className={`font-medium cursor-pointer text-lg ${active === link.title ? 'text-white' : 'text-primary'}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar