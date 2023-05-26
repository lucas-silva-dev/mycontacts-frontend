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
  box-shadow: 0px 4px 10px  ${({ theme }) => theme.colors.boxShadow};
  transition: background 0.2s ease-in;


  &:hover {
    background-color:  ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color:  ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.gray[200]};


  }

  ${({ theme, danger }) => danger && css`
      background-color: ${theme.colors.danger.main};

      &:hover {
        background-color:  ${theme.colors.danger.light};
      }

      &:active {
        background-color:  ${theme.colors.danger.dark};
      }

  `}
`;
