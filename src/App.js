import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Filters from './components/Filters';
import Info from './components/Info';
import { useGlobalContext } from './context/context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './js/theme.js';

function App() {
  const { theme, isDesktop } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <List />
      {!isDesktop && <Filters />}
      <Info />
    </ThemeProvider>
  );
}

export default App;
