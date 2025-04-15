import React from 'react'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-600 h-36 '>
      <div className='container flex justify-between items-center p-12 '> 
      {/* Social Icon */}
       <div className='hidden lg:block'>
       <div className='text-white/100 flex gap-6 '>
       <FaFacebook className='hover:!scale-105 cursor-pointer'/>
       <BsGithub className='hover:!scale-105 cursor-pointer'/>
       <BsInstagram className='hover:!scale-105 cursor-pointer'/>
       <BsTwitter className='hover:!scale-105 cursor-pointer'/>
      </div>
       </div>
      {/* Text-sec */}
       <div className=''>
       <p className='capitalize text-xl font-semibold sm:ml-28 text-white'>&copy; All right reserved Here!</p>
       </div>
      {/* Email-sec */}
        <div >
        <div className='hidden lg:block space-x-4'>
        <input type="Email" placeholder='enter your email'className='px-6 py-3 border
        ' />
        <button className='primary-btn'>Submit</button>
       </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
