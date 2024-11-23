import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
  const { navbarColor, setNavbarColor } = useTheme();

  const colors = ['blue', 'green', 'red', 'purple', 'yellow'];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sélecteur de thème</h2>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full bg-${color}-500 ${
              navbarColor === color ? 'ring-2 ring-offset-2 ring-gray-500' : ''
            }`}
            onClick={() => setNavbarColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;