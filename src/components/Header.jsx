import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () =>
{

  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onclickHandler = () =>
  {
    navigate('/result');
    if (user)
    {
      navigate('/result');
    } else
    {
      setShowLogin(true);
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      
    >
      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2,duration: 0.8 }}
      >
        <p className='text-blue-600 text-sm sm:text-md'>Best Text to Image Generator Developed By Arfan</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className='text-3xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4,duration: 2 }}
      >Turn Text to <span className='text-blue-600'>Image</span>, in Seconds</motion.h1>
      <motion.p className='text-center max-w-xl mx-auto mt-5'
      initial={{ opacity: 0,y:20}}
      animate={{ opacity: 1, y:0 }}
      transiition={{ delay: 0.6,duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at et magni deserunt qui praesentium saepe quod maiores culpa error! Ea fuga, obcaecati officia aspernatur repudiandae sed dicta labore sequi.
      </motion.p>
      <motion.button
        onClick={onclickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 py-2.5 px-12 flex items-center gap-2 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale:0.95}}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1} }}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt="" /></motion.button>

      <div className='flex flex-wrap justify-center mt-8 gap-3'>
        {Array(6).fill('').map((item, index) =>
        (
          <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
            alt="" key={index} width={70}
          />
        ))}
      </div>
      <p className='text-neutral-600 text-sm mt-2  sm:text-md'>Generated Images By GenArt </p>
    </motion.div>
  )
}

export default Header
