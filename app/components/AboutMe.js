import React, { useId } from 'react'
import Skills from './Skills'

function AboutMe({aboutMe, skills}) {

    const id = useId()

    const { title,body } = aboutMe
  return (
    <section>
        <h2 className=' mb-8'>{title}</h2>
        {body?.map (el => <p key={`${id}-${el}`} className=' mb-6'>{el}</p>)}
        <Skills data={skills} />
    </section>
  )
}

export default AboutMe