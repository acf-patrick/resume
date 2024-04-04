import { useContext, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import LangContext, { Language } from "./language.context";
import { LeftSection, RightSection } from "./sections";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

const Container = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  background: white;
  box-shadow: 0px 0 15px #2e2e2e;
  position: relative;
  padding-bottom: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${(props) => props.theme.sizes.sidebar};
    background: ${(props) => props.theme.colors.secondary};
  }

  main {
    display: grid;
    grid-template-columns: ${(props) => props.theme.sizes.sidebar} auto;

    & > div {
      z-index: 2;
    }
  }
`;

function LanguageButton() {
  const { lang, setLang } = useContext(LangContext);

  const StyledButton = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    border-radius: 5px;
    border: 2px solid #bebebe;

    button {
      all: unset;
      color: #989898;
      padding: 5px 10px;
      cursor: pointer;

      &:last-of-type {
        border-left: 1px solid white;
      }
    }

    .active {
      color: white;
      background: #373737;
    }
  `;

  return (
    <StyledButton>
      <button
        type="button"
        onClick={() => setLang(Language.EN)}
        className={lang === Language.EN ? "active" : ""}
      >
        En
      </button>
      <button
        type="button"
        onClick={() => setLang(Language.FR)}
        className={lang === Language.FR ? "active" : ""}
      >
        Fr
      </button>
    </StyledButton>
  );
}

function App() {
  const [lang, setLang] = useState(Language.EN);

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      lang = Language.EN.toString();
      localStorage.setItem("lang", lang);
    }

    setLang(parseInt(lang));
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LangContext.Provider
          value={{
            lang,
            setLang: (lang: Language) => {
              localStorage.setItem("lang", lang.toString());
              setLang(lang);
            },
          }}
        >
          <LanguageButton />
          <Container>
            <Header />
            <main>
              <LeftSection />
              <RightSection />
            </main>
          </Container>
        </LangContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
