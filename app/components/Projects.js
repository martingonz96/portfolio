import Image from 'next/image'
import React from 'react'

function Projects({ projects }) {
    return (
        <div>
            <h2>PROJECTS</h2>
            <div className='flex flex-col p-10 gap-3'>
                {projects.map(el => (
                    <div className=' shadow-sm bg-white p-8 w-full border-t-2 border-t-yellow' key={el.title}>
                        <div className=' mb-3 w-full '>
                        <Image className='rounded-md shadow-md' src={`/images/${el.img}`} width={300} height={300} />
                        </div>
                        
                        <h3 className=' mb-3'>{el.title}</h3>
                        <p className=' mb-3'>{el.description}</p>
                        <a target='_blank' className=' bg-black px-4 py-2 text-yellow rounded-md hover:text-black hover:bg-yellow transition-colors' href={el.link}>Link</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects