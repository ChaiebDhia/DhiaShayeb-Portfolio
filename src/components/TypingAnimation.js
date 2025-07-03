import React, { useState, useEffect, useMemo } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const TypingAnimation = () => {
  // Move messages outside component or use useMemo to memoize it
  const messages = useMemo(() => [
    "Let's innovate!",
    "Build with me",
    "Tech solutions",
    "Quality code",
    "Creative minds",
    "Future projects"
  ], []);

  const [displayText, setDisplayText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorColor, setCursorColor] = useState('#00f7ff');

  // Faster typing speeds
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseBetween = 800;

  useEffect(() => {
    const colors = ['#00f7ff', '#ff00cc', '#9933ff', '#0077ff'];
    const colorInterval = setInterval(() => {
      setCursorColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let timeout;

    if (!isDeleting && currentCharIndex < currentMessage.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentMessage.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentMessage.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && currentCharIndex === currentMessage.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetween);
    } else if (isDeleting && currentCharIndex === 0) {
      setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentMessageIndex, messages]); // Added messages to dependency array

  return (
    <div className="typing-text">
      <span>{displayText}</span>
      <span 
        className="typing-cursor"
        style={{ color: cursorColor }}
      >
        <FaChevronRight />
      </span>
    </div>
  );
};

export default TypingAnimation;