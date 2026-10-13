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

          {/* PDF Viewer Placeholder */}
          <div className="w-full h-[800px] glass-dark rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
            
            <div className="text-center p-8 z-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-4xl border border-primary/30">
                📄
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Resume Preview</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                The actual PDF preview would be rendered here using an iframe or react-pdf. 
                For now, you can download the placeholder resume to view it.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
