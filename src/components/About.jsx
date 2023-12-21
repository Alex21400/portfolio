import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import { myPic } from '../assets';

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col'
      >
        <div className='w-[100px] h-[4px] rounded-full bg-primary self-center mb-5'/>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      

      <div className='flex flex-col lg:flex-row lg:items-center gap-20 py-12'>
        <motion.p
            variants={fadeIn('', '', 0.1, 1.25)}
            className='text-tertiary text-lg leading-[30px] max-w-2xl text-center lg:text-left'
          >
            I'm a skilled software developer with experience in Javascript and
            Php and expertise in frameworks like React, Node.js, and
            Laravel. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        
        <motion.div 
          className='flex justify-center items-center relative z-2'
          variants={fadeIn('', '', 0.1, 1.25)}
        >
          <img src={myPic} alt='my-picture' className='about-img'/>
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')