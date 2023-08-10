import React, { useContext } from "react";

import { languageOptions } from "../languages";
import { LanguageContext } from "../containers/Language";
import "./LanguageSelector.scss";

const LanguageSelector = () => {
   const { userLanguage, userLanguageChange } = useContext(LanguageContext);
 
   const handleLanguageChange = (selectedLanguage) => {
     userLanguageChange(selectedLanguage);
   };
 
   return (
     <div className="language-selector">
       <a className="language-option" onClick={() => handleLanguageChange("en")} value={userLanguage}>EN</a>
       <a className="language-option" onClick={() => handleLanguageChange("es")} value={userLanguage}>ES</a>
     </div>
   );
 };
 
 export default LanguageSelector;