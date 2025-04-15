import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
    const [isBannerOpen, setBanneropen] = useState(true)
  return (
   
    isBannerOpen  &&  (
        <motion.div
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1}}
        transition = {{ duration: 0.5, delay:0.7}}
        
        className='font-semibold bg-yellow-500 text-gray-600 text-center p-1 text-sm hidden lg:block relative'>
           Are you a university, college or school student for an online teaching tutorial patnership?
           <a href="#" className='ml-2 text-blue-600'>Talk to us</a>
           <div className='absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer' onClick={()=> setBanneropen(!isBannerOpen)}>
            X
            </div> 
        
        </motion.div>
    )
     )
}

export default Banner
