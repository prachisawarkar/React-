import React from 'react';
export const themes = {
    light : {
        foreground : 'red',
        background : 'yellow',
    },
    dark : {
        foreground : 'green',
        background : 'blue',
    },
};

export const ThemeContext = React.createContext(
    themes.dark
);