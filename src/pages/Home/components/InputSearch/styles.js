import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.lighter};
    color: ${({ theme }) => theme.colors.gray[900]};
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow:  ${({ theme }) => theme.boxShadow};
    padding: 0 16px;
    outline-color: ${({ theme }) => theme.colors.primary.main};


    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;
