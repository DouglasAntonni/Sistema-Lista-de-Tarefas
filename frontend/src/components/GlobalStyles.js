// styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #f7f7f7; /* Cor de fundo no modo claro */
    --bg-dark-color: #2c2c2c; /* Cor de fundo no modo escuro */
    --primary-color: #007bff; /* Cor primária */
    --secondary-color: #ccc; /* Cor secundária */
    --secondary-dark-color: #444; /* Cor secundária no modo escuro */
    --text-color: #333; /* Cor do texto */
    --text-dark-color: #fff; /* Cor do texto no modo escuro */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s; /* Transição suave para modos claro e escuro */
  }

  body.dark-mode {
    background-color: var(--bg-dark-color);
    color: var(--text-dark-color);
  }

  h2 {
    color: #222;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default GlobalStyles;
