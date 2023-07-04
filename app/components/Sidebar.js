import React from 'react'
import { Email, Linkedin, Github } from './icons'
import Image from 'next/image'

function Sidebar({personalData}) {
    const { role, name, education, contactLinks } = personalData
  return (
    <div className=' bg-black flex flex-col h-auto  sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed'>
        <div className='text-white flex flex-col p-10 items-center'>
            <Image
            className=' rounded-full  mb-6'
            priority
            width={300}
            height={300}
            alt='profile picture'
            src='/images/1676045104290.jpg'
            />
            <h1 className=' mb-2'> {name} </h1>
            <h2 className=' mb-8'> {role} </h2>
            <p className=' mb-2'>{education[0]}</p>
            <p className=' mb-2'>{education[1]}</p>
            <div className=' text-center mb-4 mt-4'>
                <h3>CONTACT ME</h3>
                <div className=' flex justify-center gap-3'>
                <a className='icon-contact' href={contactLinks[2]} aria-label='linkedin link'> <Linkedin/></a>
                <a className='icon-contact' href={contactLinks[0]} aria-label='email link'> <Email/></a>
                <a className='icon-contact' href={contactLinks[0]} aria-label='github link'> <Github/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar