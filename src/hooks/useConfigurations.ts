import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { AvailableLanguage, resources } from "../languages";
import { getFromLocalStorage, setLocalStorageValue } from "../utils/commons";

export const useConfigurations = () => {
  const baseApiUrl =
    process.env.REACT_APP_API_BASE_URL ?? "http://localhost:5000";

  const initLanguage = () => {
    i18n.use(initReactI18next).init({
      // @ts-ignore: Unreachable code error
      resources,
      lng: getFromLocalStorage("language") || "it",
    });
  };

  const setLanguage = (lang: AvailableLanguage) => {
    i18n.changeLanguage(lang);
    setLocalStorageValue("language", lang);
  };

  useEffect(() => {
    initLanguage();
  }, []);

  return { baseApiUrl, setLanguage };
};
