import React from 'react'

const Footer = () => {
  return (
    <section className='c-space lg:pt-56 md:pt-7 sm:pt-7 pb-3 border-t border-black flex justify-between items-center flex-wrap gap-5' id='footer'>
        <div className='text-white flex gap-2'>
            <p> Terms & Conditions </p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div className='social-icon'>
                <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2' />
            </div>
            <div className='social-icon'>
                <img src='/assets/twitter.svg' alt='github' className='w-1/2 h-1/2' />
            </div>
            <div className='social-icon'>
                <img src='/assets/instagram.svg' alt='github' className='w-1/2 h-1/2' />
            </div>
        </div>
        <p className='text-white'>© 2023 Dat Duong. All rights reserved.</p>
    </section>
  )
}

export default Footer