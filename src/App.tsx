import GlobalStyles from "./styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Header } from "./components";

const Container = styled.div`
  margin: auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  height: 1400px;
  background: white;
  box-shadow: 0px 0 15px #2e2e2e;
  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
