import { createContext } from "react";

export enum Language {
  FR,
  EN,
}

const LangContext = createContext(Language.EN);

export default LangContext;
