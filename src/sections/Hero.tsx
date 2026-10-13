import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Button } from '../components/ui/Button';
import { ParticleBackground } from '../components/animations/ParticleBackground';
import { FadeIn } from '../components/animations/FadeIn';
import { Typewriter } from '../components/animations/Typewriter';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={0.2} direction="up">
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 tracking-wider uppercase">
                Hello, I am
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                {profileData.name}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
              <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 h-[1.5em]">
                <Typewriter 
                  words={[profileData.role, "Problem Solver", "Creative Thinker", "Tech Enthusiast"]}
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 mx-auto md:mx-0 leading-relaxed">
                {profileData.description}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(profileData.resumeUrl, '_blank')}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="glass"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Image/Graphic Content */}
          <div className="flex-1 w-full max-w-md md:max-w-none flex justify-center relative mt-12 md:mt-0">
            <FadeIn delay={0.4} direction="left" className="relative z-10 w-64 h-80 md:w-[320px] md:h-[420px]">
              {/* Animated glow background behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl rounded-[2rem] opacity-50 animate-pulse"></div>
              
              {/* Image Card Container */}
              <div className="relative w-full h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-3 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-primary/20">
                {/* 
                  Uses the profileImage from profile.ts
                */}
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-white/10 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                  <img 
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};
