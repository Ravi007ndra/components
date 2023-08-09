import React from "react";
import { PContext } from "./P";
import LanguageContext from "./LanguageProvider/LanguageContext";

export default function Z() {
    let {language, setLanguage} = React.useContext(LanguageContext);

    
    return (
        <div>
            <p>value of PContext in Z is: {language}</p>
            <button onClick={() => setLanguage(language === "en" ? "hi" : "en")}>Switch Langauge</button>
        </div>
    )
}