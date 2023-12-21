import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navLinks } from '../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} max-w-7xl mx-auto mt-20`}>
        <div className='flex justify-between py-4'>
            <Link
            to={'/'}
            className='flex items-center gap-2'
            onClick={() => window.scrollTo(0, 0)}
            >
            <img src={logo} alt="logo.png" className='w-10 h-10 object-cover' />
            <p className='text-white text-2xl font-semibold cursor-pointer'>Alex</p>
            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-8'>
            {navLinks.map(link => (
                <li 
                    key={link.id}
                    className={`text-white text-lg font-medium cursor-pointer hover:text-primary`}
                >
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
            </ul>
            <div className='flex items-center gap-4'>
                <Link to={'https://github.com/Alex21400'} target='_blank'>
                    <FaGithub size={30} className='cursor-pointer hover:text-primary'/>
                </Link>
                <Link to={'https://www.linkedin.com/in/aleksandar-klipa-654768133/'} target='_blank'>
                    <FaLinkedin size={30} className='cursor-pointer hover:text-primary'/>
                </Link>
            </div>
        </div>
        <hr />
        <p className='text-center py-6'>
            2023&copy; Alex21400 
        </p>
    </footer>
  )
}

export default Footer