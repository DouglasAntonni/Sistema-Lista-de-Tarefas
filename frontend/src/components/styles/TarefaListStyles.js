// src/components/styles/TarefaListStyles.js
import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 600px;
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

export const TarefaItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => (props.highlight ? 'rgba(255, 235, 59, 0.9)' : 'var(--bg-color)')}; /* Amarelo leve se destacado */
  border: 2px solid ${(props) => (props.highlight ? 'rgba(255, 235, 59)' : 'var(--secondary-color)')}; /* Borda amarela se destacado */
  border-radius: 8px; /* Bordas mais arredondadas */
  margin-bottom: 10px;
  transition: background-color 0.3s, transform 0.2s, border 0.3s;

  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: var(--bg-dark-color); /* Cor de fundo no modo escuro */
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1); /* Sombra mais clara no modo escuro */
  }
`;



export const EditButton = styled.button`
  margin-top: 10px;
  padding: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px); /* Efeito de elevação ao passar o mouse */
  }

  /* Estilo para o modo escuro */
  body.dark-mode & {
  
    background-color: #218838; /* Cor do botão de editar no modo escuro */
    
  }
`;

export const DeleteButton = styled(EditButton)`
  background-color: #dc3545;
  
  &:hover {
  transform: translateY(-2px); /* Efeito de elevação ao passar o mouse */
    background-color: #c82333;
  }

  /* Estilo para o modo escuro */
  body.dark-mode & {
    background-color: #c82333; /* Cor do botão de excluir no modo escuro */
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin: 20px;
  /* Estilo para o modo escuro */
  body.dark-mode & {
    color: #fff; /* Cor do texto no modo escuro */
  }
`;
