import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // load translations from this url
      loadPath: 'https://localhost:44344/api/abp/application-localization?cultureName=en&sourceName={{ns}}',
      // allow cross-origin requests
      crossDomain: true,
      // set request headers if needed
      requestOptions: {
        headers: {
          // add any required headers here
        },
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;