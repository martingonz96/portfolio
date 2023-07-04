import React from 'react'
import AboutMe from './components/AboutMe'
import { aboutMe, skills, professionalData } from '../data/page-data'
import Experience from './components/Experience'

function page() {
  return (
    <div>
       <AboutMe aboutMe={aboutMe} skills={skills}/>
       <Experience professionalData={professionalData}/>
    </div>
  )
}

export default page