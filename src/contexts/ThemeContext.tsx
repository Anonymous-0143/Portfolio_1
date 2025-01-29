import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  backgroundPattern: string;
  text: string;
  accent: string;
  surface: string;
  border: string;
  hover: string;
  cardStyle: string;
  buttonStyle: string;
  glowEffect: string;
  headerStyle: string;
  gradientText: string;
};

export const themes: Record<string, Theme> = {
  cyberpunk: {
    name: 'Cyberpunk',
    primary: 'from-purple-400 to-pink-600',
    secondary: 'from-purple-500 to-pink-600',
    background: 'bg-[#0a0a0a]',
    backgroundPattern: 'bg-grid-purple-500/10',
    text: 'text-white',
    accent: 'text-purple-500',
    surface: 'bg-black/40 backdrop-blur-xl',
    border: 'border-purple-500/20',
    hover: 'hover:bg-purple-500/10',
    cardStyle: 'bg-black/40 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-500/10',
    buttonStyle: 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/25',
    glowEffect: 'after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple-500/20 after:to-pink-500/20 after:blur-xl after:-z-10',
    headerStyle: 'bg-black/60 backdrop-blur-xl border-b border-purple-500/20',
    gradientText: 'bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'
  },
  ocean: {
    name: 'Ocean',
    primary: 'from-blue-400 to-cyan-600',
    secondary: 'from-blue-500 to-cyan-600',
    background: 'bg-[#051b2c]',
    backgroundPattern: 'bg-wave-pattern',
    text: 'text-blue-50',
    accent: 'text-cyan-400',
    surface: 'bg-blue-900/30 backdrop-blur-xl',
    border: 'border-cyan-500/20',
    hover: 'hover:bg-blue-500/10',
    cardStyle: 'bg-blue-900/30 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10',
    buttonStyle: 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25',
    glowEffect: 'after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500/20 after:to-cyan-500/20 after:blur-xl after:-z-10',
    headerStyle: 'bg-blue-900/60 backdrop-blur-xl border-b border-cyan-500/20',
    gradientText: 'bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text'
  },
  forest: {
    name: 'Forest',
    primary: 'from-green-400 to-emerald-600',
    secondary: 'from-green-500 to-emerald-600',
    background: 'bg-[#0c1f0c]',
    backgroundPattern: 'bg-leaf-pattern',
    text: 'text-green-50',
    accent: 'text-emerald-400',
    surface: 'bg-green-900/30 backdrop-blur-xl',
    border: 'border-emerald-500/20',
    hover: 'hover:bg-green-500/10',
    cardStyle: 'bg-green-900/30 backdrop-blur-xl border border-emerald-500/20 shadow-lg shadow-emerald-500/10',
    buttonStyle: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25',
    glowEffect: 'after:absolute after:inset-0 after:bg-gradient-to-r after:from-green-500/20 after:to-emerald-500/20 after:blur-xl after:-z-10',
    headerStyle: 'bg-green-900/60 backdrop-blur-xl border-b border-emerald-500/20',
    gradientText: 'bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text'
  },
  aurora: {
    name: 'Aurora',
    primary: 'from-indigo-400 to-purple-600',
    secondary: 'from-indigo-500 to-purple-600',
    background: 'bg-[#0f0a1f]',
    backgroundPattern: 'bg-aurora-pattern',
    text: 'text-indigo-50',
    accent: 'text-indigo-400',
    surface: 'bg-indigo-900/30 backdrop-blur-xl',
    border: 'border-indigo-500/20',
    hover: 'hover:bg-indigo-500/10',
    cardStyle: 'bg-indigo-900/30 backdrop-blur-xl border border-indigo-500/20 shadow-lg shadow-indigo-500/10',
    buttonStyle: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/25',
    glowEffect: 'after:absolute after:inset-0 after:bg-gradient-to-r after:from-indigo-500/20 after:to-purple-500/20 after:blur-xl after:-z-10',
    headerStyle: 'bg-indigo-900/60 backdrop-blur-xl border-b border-indigo-500/20',
    gradientText: 'bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text'
  }
};

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.cyberpunk);

  const setTheme = (themeName: string) => {
    setCurrentTheme(themes[themeName]);
  };

  useEffect(() => {
    document.body.className = `${currentTheme.background} ${currentTheme.backgroundPattern}`;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};