import React from 'react';
import { educationData } from '../data/experience'; // Combined in experience.ts
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { ComingSoon } from '../components/ui/ComingSoon';
import { FaGraduationCap } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications."
        />

        {educationData.length === 0 && <ComingSoon message="Education details coming soon." />}
        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <FadeIn key={edu.id} delay={0.2 * index} direction="up">
              <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                {/* Decorative Icon Background */}
                <FaGraduationCap className="absolute -right-10 -bottom-10 text-[200px] text-white/5 group-hover:text-primary/10 transition-colors duration-500 z-0" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-6">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.school} className="w-16 h-16 rounded-2xl bg-white/10 object-contain p-2" />
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl text-primary">
                          <FaGraduationCap />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <h4 className="text-lg text-secondary font-medium">{edu.school}</h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-gray-300 w-fit">
                        {edu.duration}
                      </span>
                      {edu.gpa && (
                        <span className="text-primary font-bold">GPA: {edu.gpa}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {edu.courses && edu.courses.length > 0 && (
                    <div>
                      <h5 className="text-white font-medium mb-3">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-black/30 border border-white/5 text-gray-400 text-sm rounded-lg">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
