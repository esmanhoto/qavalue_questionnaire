import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
import Form from "./components/Form";
import { Container, Theme } from "./styles";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`;

function App() {
  const [theme, setTheme] = useState(DarkTheme);

  const themeToDark = () => {
    setTheme(DarkTheme);
  };

  const themeToLight = () => {
    setTheme(LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Form />
        <Theme>
          <p>Theme:</p>
          <button onClick={themeToDark}>Dark</button>
          <button onClick={themeToLight}>Light</button>
        </Theme>
      </Container>
    </ThemeProvider>
  );
}

export default App;
