import React from 'react';
import LanguageContext from './LanguageContext';

export default function LanguageProvider({children}) {
    const [language, setLanguage] = React.useState("en");
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}