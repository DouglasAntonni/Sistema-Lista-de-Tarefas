// src/components/styles/HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 15px 20px;
  background-color: var(--bg-color); /* Cor de fundo no modo claro */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: background-color 0.3s, box-shadow 0.3s;
  
  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: var(--bg-dark-color); /* Cor de fundo no modo escuro */
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1); /* Sombra mais clara no modo escuro */
  }
`;

export const Logo = styled.h1`
  font-size: 2.0rem;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo dentro do Logo */
  flex-grow: 1; /* Permite que o Logo cresça e ocupe o espaço disponível */
  color: var(--text-color); /* Cor do texto no modo claro */

  /* Estilo para o modo escuro */
  body.dark-mode & {
    color: var(--text-dark-color); /* Cor do texto no modo escuro */
  }
`;;





