import React from 'react';
import { Email, Linkedin, Github } from './icons';
import Image from 'next/image';

function Sidebar({ personalData }) {
  const { role, name, education, contactLinks } = personalData;
  return (
    <div className='bg-black flex flex-col items-center py-8 sm:h-screen sm:w-1/3 sm:fixed sm:overflow-y-auto'>
      <div className='rounded-full mb-6' style={{ width: '250px', height: '250px' }}>
        <Image
          className='rounded-full object-cover'
          priority
          width={250}
          height={250}
          alt='profile picture'
          src='/images/1676045104290.jpg'
        />
      </div>
      <h1 className='mb-2 text-center'>{name}</h1>
      <h2 className='mb-8 text-white'>{role}</h2>
      <p className='mb-2 text-white'>{education[0]}</p>
      <p className='mb-2 text-white'>{education[1]}</p>
      <div className='text-center mb-4 mt-4'>
        <h3 className=' text-white'>CONTACT ME</h3>
        <div className='flex justify-center gap-3'>
          <a className='icon-contact' href={contactLinks[2]} aria-label='linkedin link'>
            <Linkedin />
          </a>
          <a className='icon-contact' href={contactLinks[0]} aria-label='email link'>
            <Email />
          </a>
          <a className='icon-contact' href={contactLinks[1]} aria-label='github link'>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
