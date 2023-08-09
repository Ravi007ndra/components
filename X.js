import React from 'react';
import Y from './Y';
import ThemeContext from './ThemeProvider/ThemeContext';
import LanguageContext from './LanguageProvider/LanguageContext';


export default function X() {
    let { theme, setTheme } = React.useContext(ThemeContext);
    let { language } = React.useContext(LanguageContext);
    
    return (
        <div>
            value of pContext in X is: {theme} and language is: {language}
            <Y />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    )
}