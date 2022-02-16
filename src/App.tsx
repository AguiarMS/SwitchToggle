import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { HomeScreen } from './screen/Home/Home';
import { Description } from './components/Description'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRepositories from './components/Repositories';



interface props {
  name: string
  repository: any
}


const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>

      <HomeScreen />
      <Description />
      <MyRepositories />
    </>
  );
}

export default App;
