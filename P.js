import React from 'react';
import X from './X';
import LanguageProvider from './LanguageProvider/LanguageProvider';
import ThemeProvider from './ThemeProvider/ThemeProvider';


export default function P() {


    return (
        <LanguageProvider>
            <ThemeProvider>
                <X />
            </ThemeProvider>
        </LanguageProvider>

    )
}

