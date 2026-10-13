import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  const handleTyping = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      if (!loop && loopNum === words.length - 1) return;
      setTimeout(() => setIsDeleting(true), delay);
      setTypingDelay(deletingSpeed);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingDelay(typingSpeed);
    }
  }, [deletingSpeed, delay, isDeleting, loop, loopNum, text, typingSpeed, words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [handleTyping, typingDelay]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {text}
      <span className="animate-pulse border-r-2 border-primary ml-1">&nbsp;</span>
    </span>
  );
};
