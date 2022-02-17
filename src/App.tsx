import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { MenuTitle } from './components/MenuTitle'
import { Description } from './components/Description'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRepositories from './components/Repositories';
import { MyRoutes } from './routes/routes'
import { Repos } from './Pages/Repos';


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
      
      <MyRoutes />
    </>
  );
}

export default App;
