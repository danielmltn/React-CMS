import React from 'react';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
 
  const LightDarkThemeContext = React.createContext(themes.light);
  export {themes, LightDarkThemeContext}