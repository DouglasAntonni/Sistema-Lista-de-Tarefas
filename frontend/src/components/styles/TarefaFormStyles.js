// src/components/styles/TarefaFormStyles.js
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--bg-color); /* Cor de fundo no modo claro */
  border-radius: 12px; /* Bordas mais arredondadas */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  transition: background-color 0.3s, box-shadow 0.3s;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }

  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: var(--bg-dark-color); /* Cor de fundo no modo escuro */
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1); /* Sombra mais clara no modo escuro */
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  /* Estilo para o modo escuro */
  body.dark-mode & {
    border-color: #555; /* Cor da borda no modo escuro */
    background-color: #333; /* Fundo do input no modo escuro */
    color: #fff; /* Cor do texto no modo escuro */
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: #0056b3; /* Cor do botão no modo escuro */
  }
`;
