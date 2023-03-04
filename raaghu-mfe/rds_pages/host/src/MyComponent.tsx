import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import i18n from '../../../libs/shared/i18n';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    
    console.log(selectedLanguage);
    const handleLanguageChange = (event:any) => {
      const newLanguage = event.target.value;
      i18n.changeLanguage(newLanguage);
      setSelectedLanguage(newLanguage);
    };
  
    return (
      <div>
        <label>
          <input type="radio" value="en" checked={selectedLanguage === 'en'} onChange={handleLanguageChange} />
          English
        </label>
        <label>
          <input type="radio" value="hi" checked={selectedLanguage === 'hi'} onChange={handleLanguageChange} />
          हिन्दी
        </label>
      </div>
    );
  }



function MyComponent() {
  const { t } = useTranslation();
  let selectedLanguage = 'hi';
  useEffect(() => {
    
    axios.get(`https://localhost:44344/api/abp/application-localization?cultureName=${selectedLanguage}&onlyDynamics=false`)
      .then(response => {
        
        var data1 = {};
        const translation= response.data.resources;
        Object.keys(response.data.resources).forEach(key => {
            data1 = {...data1, ...translation[key].texts}
        })
        console.log(data1)
        // Object.keys(response.data.resources).forEach(key => {
        i18n.addResourceBundle('hi', 'translation', data1, false, true);
        // });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <LanguageSwitcher />
     
    </div>
  );
}

export default MyComponent;
