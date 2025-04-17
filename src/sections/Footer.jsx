import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300
    flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms&Conditions</p>
            <p></p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
        <div className='social-icon'>
               <a href='https://github.com/shashi-bot' target='_blank' rel="noreferrer"> <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2'/></a>
        </div>
        <div className='social-icon'>
               <a href='https://linkedin.com/in/shashi-ranjan-kumar-254b54227' target='_blank' rel="noreferrer"> <img src='/assets/linkedin1.svg' alt='github' className='w-1/2 h-1/2'/></a>
        </div>

        </div>
        <p className='text-white-500'>© 2025 Shashi. All rights reserved </p>
    </section>
  )
}

export default Footer