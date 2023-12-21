import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, name, description, image, live_demo, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1 )}
      className='bg-black-200 p-5 rounded-xl sm:w-[360px] w-full flex flex-col shadow-xl mx-auto'
    >
      <div className='relative w-full h-[220px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-xl'/>
      </div>

      <div className='mt-3'>
        <h3 className='text-white font-bold text-xl'>{name}</h3>
        <p className='mt-2 text-tertiary text-sm'>{description}</p>
      </div>

      <span className='flex-grow'></span>

      <div className='flex items-center gap-4 mt-2'>
        <button className='bg-white text-black-300 font-semibold px-4 py-2 rounded-lg hover:bg-slate-300'>
          <Link to={live_demo} target='_blank'>
            Live Demo
          </Link>    
        </button>
        <Link 
          className='text-blue-500 hover:underline hover:text-blue-600'
          to={source_code_link} target='_blank'>
            View Code
          </Link>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
      <>
        <motion.div
          variants={textVariant()}
          className='flex flex-col'
        >
          <div className='w-[100px] h-[4px] rounded-full bg-primary self-center mb-5'/>
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.sectionHeadText}>Works</h2>
        </motion.div>
        <div className='w-full flex'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-3 text-tertiary text-lg leading-[30px] text-center'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-12 flex flex-wrap gap-8'>
          {projects.map((project, index) => {
            return (
              <ProjectCard key={project.name} index={index} {...project} />
            )
          })}
        </div>
      </>
  )
}

export default SectionWrapper(Works, 'works');