import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeScreen.scss';

const WelcomeScreen = ({ showWelcome }) => {
  if (!showWelcome) return null;

  return (
    <motion.div 
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome</h1>
      <p>Initializing Dhia's Portfolio</p>
      <div className="loading-bar">
        <motion.div 
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;