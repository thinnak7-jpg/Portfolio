import React from 'react';
import { achievementsData } from '../data/experience'; // Combined in experience.ts
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { FaTrophy } from 'react-icons/fa';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Achievements" 
          subtitle="Competitions, awards, and milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <FadeIn key={achievement.id} delay={0.1 * index} direction="up">
              <div className="glass-dark p-8 rounded-3xl h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  <FaTrophy />
                </div>
                
                <span className="text-sm font-medium text-gray-500 mb-2">{achievement.date} &bull; {achievement.category}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{achievement.title}</h3>
                <p className="text-gray-400 flex-grow leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
