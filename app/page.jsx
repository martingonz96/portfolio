import React from 'react';
import AboutMe from './components/AboutMe';
import { aboutMe, skills, professionalData } from '../data/page-data';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { projects } from '../data/page-data'; // Corrected import statement

function Page() {
  return (
    <div>
       <AboutMe aboutMe={aboutMe} skills={skills}/>
       <Experience professionalData={professionalData}/>
       <Projects projects={projects}/>
    </div>
  );
}

export default Page;
