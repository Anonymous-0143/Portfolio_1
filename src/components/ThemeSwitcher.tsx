import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme, themes } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" style={{ zIndex: 1000 }}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentTheme.secondary} text-white font-semibold`}
      >
        <Palette className="w-4 h-4" />
        <span>Theme</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{ zIndex: 1000 }}
            className={`absolute left-0 mt-2 w-64 py-2 ${currentTheme.surface} ${currentTheme.border} rounded-xl shadow-xl backdrop-blur-lg`}
          >
            {Object.entries(themes).map(([key, theme]) => (
              <motion.button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setIsOpen(false);
                }}
                whileHover={{ x: 5 }}
                className={`w-full px-4 py-3 text-left ${currentTheme.hover} flex items-center gap-3 ${
                  currentTheme.name === theme.name ? `bg-gradient-to-r ${theme.primary} bg-opacity-10` : ''
                } ${currentTheme.text}`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${theme.primary} ${theme.glowEffect}`} />
                <div>
                  <div className="font-medium">{theme.name}</div>
                  <div className="text-sm opacity-60">
                    {getThemeDescription(theme.name)}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const getThemeDescription = (themeName: string) => {
  const descriptions: Record<string, string> = {
    Cyberpunk: 'Neon-lit digital future',
    Ocean: 'Deep sea tranquility',
    Forest: 'Natural earth tones',
    Sunset: 'Warm desert vibes',
    Aurora: 'Mystical northern lights'
  };
  return descriptions[themeName] || '';
};

export default ThemeSwitcher;