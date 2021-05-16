import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Filters from './components/Filters';
import { useGlobalContext } from './context/context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './js/theme.js';

function App() {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <List />
      <Filters />
    </ThemeProvider>
  );
}

export default App;
