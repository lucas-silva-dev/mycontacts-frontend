import styled from 'styled-components';

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.background.lighter}AF;
  /* backdrop-filter: blur(3.5px); */
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
