import React from 'react';
import { experienceData } from '../data/experience';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { ComingSoon } from '../components/ui/ComingSoon';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and the companies I've collaborated with."
        />

        {experienceData.length === 0 && <ComingSoon message="Work experience coming soon." />}
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>

          <div className="flex flex-col gap-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-black/50 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

                  {/* Empty Space for alignment on Desktop */}
                  <div className="hidden md:block w-1/2 px-8"></div>

                  {/* Content Card */}
                  <FadeIn 
                    delay={0.2} 
                    direction={isEven ? 'left' : 'right'} 
                    className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8"
                  >
                    <div className="glass-dark p-8 rounded-3xl group hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.position}</h3>
                        <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-6">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded-full bg-white/10" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold text-primary">
                            {exp.company.charAt(0)}
                          </div>
                        )}
                        <h4 className="text-lg text-gray-300 font-medium">{exp.company}</h4>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-gray-400 flex items-start gap-3">
                            <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
