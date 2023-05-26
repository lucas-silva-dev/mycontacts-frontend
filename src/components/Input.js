import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color:  ${({ theme }) => theme.colors.background.lighter};
  box-shadow: 0px 4px 10px  ${({ theme }) => theme.colors.boxShadow};
  outline-color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid transparent;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    outline-color: ${theme.colors.danger.main};
    border-color:  ${theme.colors.danger.main};
  `}
`;
