import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, slideIn, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { PlanetCanvas } from './canvas';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
      from_name: formData.name,
      to_name: 'Alex',
      from_email: formData.email,
      to_email: 'saki.94@hotmail.com',
      message: formData.message
  }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
          setLoading(false);
          setModal(true);

          setFormData({
              name: '',
              phone: '',
              email: '',
              message: ''
          });
      }, (error) => {
          setLoading(false);
          console.log(error);
          alert('Sorry, something went wrong');
      });
  }
  
  return (
    <div className='xl:mt-12 '>
      <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>Stay in touch with me</p>
          <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
      <motion.div 
        className='flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
        variants={fadeIn('up', 'spring', 0.2, 1)}
      >
        <div
          className='flex-[0.9] shadow-lg rounded-xl'
        >
          <form 
            className='mt-12 flex flex-col gap-8 p-8 bg-black-200 rounded-xl' 
            onSubmit={(e) => handleSubmit(e)}>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
              type="text" 
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name...'
              className='bg-slate-100 text-black-300 py-2 px-3 sm:py-4 sm:px-6 placeholder:text-tertiary rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email...'
              className='bg-slate-100 text-black-300 py-2 px-3 sm:py-4 sm:px-6 placeholder:text-tertiary rounded-lg outline-none border-none font-medium'
              />           
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
              rows='7' 
              type="text" 
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message...'
              className='bg-slate-100 text-black-300 py-2 px-3 sm:py-4 sm:px-6 placeholder:text-tertiary rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-primary py-3 px-8 rounded-lg outline-none text-white font-semibold shadow-md w-full sm:w-fit'
            >
              {!loading ? 'Send' : 'Sending...'}
            </button>
          </form>
          {modal && <Modal modal={modal} setModal={setModal}/>}
        </div>  

          <motion.div
            animate={{
              y: [0, 20, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
            <PlanetCanvas />
          </motion.div>
      </motion.div>    
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')