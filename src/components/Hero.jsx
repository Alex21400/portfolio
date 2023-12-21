import React from 'react';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';
import { heroBg } from '../assets';
import { SectionWrapper } from '../hoc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (

      <div className={`${styles.paddingHero} max-w-7xl mx-auto flex flex-col xl:flex-row gap-20 z-[2]`}>
        <motion.div
          variants={fadeIn('down', 'spring', 0.3, 1)} 
          className='flex flex-col justify-center'
        >

          <div className='flex flex-row gap-4'>
            <div className='h-[250px] xs:h-[300px] md:h-[250px] w-2 md:w-3 bg-secondary rounded-full'/>

            <div>
              <h1 className={styles.heroHeadText}>Hello, <br className='block' /> I'm <br className='block sm:hidden' /> Alex,</h1>
              <h1 className={`${styles.heroHeadText} mt-2 text-secondary`}>Web Developer</h1>
            </div>
          </div>

          <div className='ml-6'>
            <p className='text-tertiary mt-3'>Front End Developer / Node.js Developer / Php / Javascript / React</p>

            <div className='flex flex-row mt-8 gap-4'>
              <a href="#works" className='bg-primary px-6 py-2 rounded-lg text-lg font-semibold text-black-300 flex items-center justify-center hover:-translate-y-2 transition duration-300'>My Work</a>
              <a href="#contact" className='border-primary border-2 px-6 py-2 rounded-lg text-lg font-semibold text-primary hover:-translate-y-2 transition duration-300'>Hire Me</a>
            </div>
          </div>

          <div className='ml-6 mt-4 flex flex-col gap-6'>
            <div className='w-[1px] h-[50px] bg-primary rounded-full'/>
            <Link 
              className='ml-[-12px] hover:text-primary cursor-pointer'
              to={'https://github.com/Alex21400'} 
              target='_blank'
            >
              <FaGithub size={30} />
            </Link>
            <Link 
              className='ml-[-12px] hover:text-primary cursor-pointer'
              to={'https://www.linkedin.com/in/aleksandar-klipa-654768133/'} 
              target='_blank'
            >
              <FaLinkedin size={30} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className='flex justify-center items-center'
          variants={fadeIn('up', 'spring', 0.3, 1)}
        >
          {/* <LaptopCanvas /> */}
          <img src={heroBg} alt="hero-bg" className='updown'/>
        </motion.div>

      </div>
  )
}

export default SectionWrapper(Hero, '')