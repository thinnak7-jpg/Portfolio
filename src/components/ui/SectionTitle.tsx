import React from 'react';
import { FadeIn } from '../animations/FadeIn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">{title}</span>
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </FadeIn>
      )}
    </div>
  );
};
