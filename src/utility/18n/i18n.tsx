import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../language-json/en/en.json';
import zh from '../language-json/china/china.json';

import arabic from "../language-json/arabic/arabic.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      ar: { translation: arabic }, 
    },
    fallbackLng: 'en',
    lng: 'en', // optional default language
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
