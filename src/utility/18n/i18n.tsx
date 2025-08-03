import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../language-json/en/en.json';
import zh from '../language-json/china/china.json';
import arabic from "../language-json/arabic/arabic.json";
import regEng from "../language-json/registration/regEng.json"
import regArabic from "../language-json/registration/regArabic.json";
import regChines from "../language-json/registration/regChines.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...en, ...regEng } },
      zh: { translation: { ...zh, ...regChines } },
      ar: { translation: { ...arabic, ...regArabic } },
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
