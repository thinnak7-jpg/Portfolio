import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Certificates } from '../sections/Certificates';
import { Experience } from '../sections/Experience';
import { Education } from '../sections/Education';
import { Achievements } from '../sections/Achievements';
import { Resume } from '../sections/Resume';
import { Gallery } from '../sections/Gallery';
import { Contact } from '../sections/Contact';
import { projectsData } from '../data/projects';
import { experienceData, educationData, achievementsData } from '../data/experience';
import { activitiesData } from '../data/gallery';
import { profileData } from '../data/profile';
import { isFilled } from '../utils/content';

// Sections without real content yet are left off the home page
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      {projectsData.length > 0 && <Projects />}
      <Certificates />
      {experienceData.length > 0 && <Experience />}
      {educationData.length > 0 && <Education />}
      {achievementsData.length > 0 && <Achievements />}
      {isFilled(profileData.resumeUrl) && <Resume />}
      {activitiesData.length > 0 && <Gallery />}
      <Contact />
    </div>
  );
};

export default Home;
