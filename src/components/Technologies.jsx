import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const TechnologyCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[200px] w-[45%] shadow-xl'>
      <motion.div 
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full violet-pink-gradient p-[1px] rounded-lg shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-black-300 rounded-lg py-5 px-8 sm:min-h-[220px] min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-20 h-20 object-contain'/>

          <h3 className='text-white text-lg font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Technologies = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col'
      >
        <div className='w-[100px] h-[4px] rounded-full bg-primary self-center mb-5'/>
        <p className={styles.sectionSubText}>These are technologies that I am familiar with</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

        <div className='w-full flex flex-wrap justify-center gap-8 mt-10'>
          {technologies.map((technology, index) => {
            return (
              <TechnologyCard key={technology.title} index={index} {...technology} />
            )
        })}
        </div>
    </>
  )
}

export default SectionWrapper(Technologies, '')