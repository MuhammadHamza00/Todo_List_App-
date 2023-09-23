import './App.css';
import Main from './Components/Main'
import { useState,useEffect } from 'react';
import themeContext from './Components/MyContext'

function App() {
  const [themeValue, setThemeValue] = useState('light');

  return (
    <>
      <themeContext.Provider value={{ themeValue, setThemeValue }}>
        <Main />
      </themeContext.Provider>
    </>
  );
}

export default App;
