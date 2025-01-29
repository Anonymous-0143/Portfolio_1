import React, { useState } from 'react';
import RetroLoader from './loaders/RetroLoader';
import { useTheme } from '../contexts/ThemeContext';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentTheme } = useTheme();

  return isLoading ? (
    <RetroLoader onComplete={() => setIsLoading(false)} theme={currentTheme} />
  ) : null;
};

export default LoadingScreen;