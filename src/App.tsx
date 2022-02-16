import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import { HomeScreen } from './screen/Home';
import { Description } from './components/Description'
import api from './services/api';

interface props {
  name: string
  repository: any
}


const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const [repositories, setRespositories] = useState<any>([])

  useEffect(() => {
    fetch('https://api.github.com/users/aguiarMS/repos')
      .then(response => response.json())
      .then(data => setRespositories(data))
  }, [])


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

      <div>
          {repositories.map((repository: {name: string}) => {
            return(
              <li>{repository.name}</li>
            )
          })}
      </div>
    </>
  );
}

export default App;
