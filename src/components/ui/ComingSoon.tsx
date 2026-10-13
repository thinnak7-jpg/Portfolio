import { FadeIn } from '../animations/FadeIn';

export const ComingSoon = ({ message = 'Content coming soon.' }: { message?: string }) => (
  <FadeIn delay={0.2} direction="up">
    <div className="glass-dark max-w-xl mx-auto p-10 rounded-3xl border border-white/5 text-center">
      <p className="text-gray-400">{message}</p>
    </div>
  </FadeIn>
);
