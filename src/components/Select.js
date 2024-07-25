import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color:  ${({ theme }) => theme.colors.background.lighter};
  box-shadow:  ${({ theme }) => theme.boxShadow};
  border: 2px solid transparent;
  outline-color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  appearance: none;
  text-transform: capitalize;


  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

  option {
    text-transform: capitalize;
  }
`;
