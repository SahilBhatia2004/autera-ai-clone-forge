import { useState, useEffect } from "react";

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

const AnimatedText = ({ words, className = "" }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span 
      className={`inline-block transition-all duration-200 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform scale-95'
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  );
};

export default AnimatedText;