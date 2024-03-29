/ App.js
<Toggle theme={theme} toggleTheme={toggleTheme} />
<h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
// App.js
<span>Credits:</span>
<small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
<small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>

// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './components/Toggle';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
          Credits:
          <small>Sun icon made by smalllikeart from www.flaticon.com</small>
          <small>Moon icon made by Freepik from www.flaticon.com</small>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default App;