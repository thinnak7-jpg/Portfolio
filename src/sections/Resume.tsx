import React from 'react';
import { profileData } from '../data/profile';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FadeIn } from '../components/animations/FadeIn';
import { Button } from '../components/ui/Button';
import { FaDownload, FaPrint } from 'react-icons/fa';

export const Resume = () => {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle 
          title="Resume" 
          subtitle="A summary of my qualifications and professional background."
        />

        <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
          {/* Controls */}
          <div className="flex gap-4 mb-8">
            <Button 
              onClick={() => window.open(profileData.resumeUrl, '_blank')}
            >
              <FaDownload className="mr-2" /> Download PDF
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(profileData.resumeUrl, '_blank')}
            >
              <FaPrint className="mr-2" /> Print Resume
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="w-full h-[800px] glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <iframe src={profileData.resumeUrl} title={`${profileData.name} — Resume`} className="w-full h-full bg-white" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
