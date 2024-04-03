import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import LangContext, { Language } from "./language.context";
import { LeftSection, RightSection } from "./sections";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

const Container = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  height: 1400px;
  background: white;
  box-shadow: 0px 0 15px #2e2e2e;
  position: relative;

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
    height: 100px;
    grid-template-columns: ${(props) => props.theme.sizes.sidebar} auto;

    & > div {
      z-index: 2;
    }
  }
`;

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
