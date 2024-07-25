import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background.lighter};
  background-color:  ${({ theme }) => theme.colors.primary.main};
  box-shadow:  ${({ theme }) => theme.boxShadow};
  transition: background 0.2s ease-in;


  &:hover {
    background-color:  ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color:  ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: not-allowed !important;
    opacity: 0.7 !important;
    background-color: ${({ theme }) => theme.colors.gray[200]} !important;
  }

  ${({ theme, $danger }) => $danger && css`
      background-color: ${theme.colors.danger.main};

      &:hover {
        background-color:  ${theme.colors.danger.light};
      }

      &:active {
        background-color:  ${theme.colors.danger.dark};
      }

  `}
`;
