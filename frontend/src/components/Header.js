// src/components/Header.js
import React, { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  
} from './styles/HeaderStyles';

const Header = () => {
 
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };


  return (
    <HeaderContainer>
      <Logo>Task APP</Logo>
      <div>
        {/* Botão do modo escuro */}
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
