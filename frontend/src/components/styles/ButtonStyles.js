// src/components/styles/ButtonStyles.js
import styled from 'styled-components';

export const DownloadButton = styled.button`
  padding: 10px 20px;
  background-color: var(--bg-color); /* Cor de fundo no modo claro */
  color: var(--text-color); /* Cor do texto no modo claro */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  margin: 20px auto; /* Centraliza o botão */

  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: var(--bg-dark-color); /* Cor de fundo no modo escuro */
    color: var(--text-dark-color); /* Cor do texto no modo escuro */
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.2); /* Sombra mais clara no modo escuro */
  }

  &:hover {
    transform: translateY(-2px); /* Efeito de elevação ao passar o mouse */
    background-color: #007bff; /* Amarelo leve ao passar o mouse */
  }

  /* Estilo para o modo escuro */
  body.dark-mode &:hover {
    background-color: #007bff; /* Amarelo leve ao passar o mouse no modo escuro */
  }
`;
