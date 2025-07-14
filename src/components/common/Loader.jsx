import React from 'react';
import { FaCode } from 'react-icons/fa';
import './Loader.scss';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader">
      <FaCode className="spinning-icon" />
    </div>
  );
};

export default Loader;