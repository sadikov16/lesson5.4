import { initReactI18next } from "react-i18next";
import Uz from "./Language/tranlate.uz";
import Ru from "./Language/treanslate.ru";
import En from "./Language/translate.en";
import i18n from "i18next";


const resources = {
  uz: {
    translation: Uz
  },
  ru: {
    translation: Ru
  },
  en: {
    translation: En
  }
};

i18n
  .use(initReactI18next) 

  .init({
    resources,
    lng: "uz", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;