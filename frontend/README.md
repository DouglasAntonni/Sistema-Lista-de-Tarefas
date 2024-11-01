export const MobileNav = styled(Nav)`
  flex-direction: column;
  background-color: var(--bg-dark-color);
  position: absolute;
  top: 60px;
  right: 0;
  padding: 1rem;
  display: ${({ open }) => (open ? 'flex' : 'none')}; /* Condição para exibir */
  @media (min-width: 768px) {
    display: none; /* Esconde o menu móvel em telas maiores */
  }
    
`;