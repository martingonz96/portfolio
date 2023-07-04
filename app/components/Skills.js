"use client"
import { useState } from 'react'

const Skills = ({data}) => {


    const [active, setActive] = useState('soft')

    const changeBg = (skill) => (active === skill ? 'bg-yellow' : 'bg-gray-600')

    const tabAlign = (tab) => (tab === 'soft' ? 'text-left' : 'text-right')

    const tabs = (
        <div className=' flex '>
        {['soft', 'hard'].map (el => (
             <button key={el} className={`btn ${changeBg(el)} ${tabAlign(el)}`} type='button'
             onClick={()=> setActive(el)}
             >{el} Skills</button>
        ))}
    </div>
    )

  return (
    <div>
    {tabs}

    <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${active === 'soft' ? 'justify-start' : 'justify-end'}`}>
        {data[active].map(({icon, text}) => (
          
          <li key={text} className='skill'>
          {' '}
          <span>{icon}</span>{text}
          </li>

        ))}
    </ul>


    </div>
   
  )
}

export default Skills