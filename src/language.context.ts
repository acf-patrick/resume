import { createContext } from "react";

export enum Language {
  FR,
  EN,
}

const LangContext = createContext({
  lang: Language.EN,
  setLang: (_: Language) => {},
});

export default LangContext;
