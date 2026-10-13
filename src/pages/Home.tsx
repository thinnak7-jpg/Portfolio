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

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Education />
      <Achievements />
      <Resume />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
