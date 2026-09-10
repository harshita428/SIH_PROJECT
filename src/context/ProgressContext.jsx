// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { saveProgress, loadProgress } from '../utils/localStorage';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({});

  // Load progress on mount
  useEffect(() => {
    const saved = loadProgress('progress');
    if (saved) setProgress(saved);
  }, []);

  // Save whenever progress changes
  useEffect(() => {
    saveProgress('progress', progress);
  }, [progress]);

  const updateProgress = (updates) => {
    setProgress((prev) => ({ ...prev, ...updates }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
