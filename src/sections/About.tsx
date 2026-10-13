import React from 'react';
import { profileData } from '../data/profile';
import { FadeIn } from '../components/animations/FadeIn';
import { SectionTitle } from '../components/ui/SectionTitle';
import { isFilled } from '../utils/content';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image & Quick Stats */}
          <FadeIn direction="right" delay={0.2} className="relative">
            <div className="glass p-4 rounded-3xl relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={profileData.profileImage}
                alt={profileData.name}
                className="rounded-2xl w-full h-[500px] object-cover object-top grayscale-[50%] hover:grayscale-0 transition-all duration-500 relative z-10"
              />
            </div>
            
            {/* Decorative element behind image */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 blur-3xl rounded-full z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/20 blur-3xl rounded-full z-0"></div>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-8">
            <FadeIn direction="left" delay={0.3}>
              <div className="glass-dark p-8 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold mb-4 text-white">Biography</h3>
                <p className="text-gray-400 leading-relaxed">
                  {isFilled(profileData.about.bio) ? profileData.about.bio : profileData.description}
                </p>
              </div>
            </FadeIn>

            {isFilled(profileData.about.goals) && (
              <FadeIn direction="left" delay={0.4}>
                <div className="glass-dark p-8 rounded-3xl border border-white/5">
                  <h3 className="text-2xl font-bold mb-4 text-white">Goals</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {profileData.about.goals}
                  </p>
                </div>
              </FadeIn>
            )}

            {profileData.about.interests.length > 0 && (
            <FadeIn direction="left" delay={0.5}>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {profileData.about.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full glass text-gray-300 text-sm border border-white/10 hover:border-primary/50 transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
