import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  ul + ul {
    margin-top: 8px;
  }
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};


  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.background.lighter};
    }
  }
`;

export const ListFilter = styled.ul`
  margin-top: 24px;


  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) => orderBy !== 'desc' && 'rotate(180deg)'};
      transition: transform 0.2s ease-in;
    }
  }

`;

export const CardList = styled.ul`
  margin-top: 24px;
  list-style: none;
`;

export const Card = styled.li`
  background-color:  ${({ theme }) => theme.colors.background.lighter};
  box-shadow:  ${({ theme }) => theme.boxShadow};
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + li {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        text-transform: uppercase;
        font-weight: bold;
        color:  ${({ theme }) => theme.colors.primary.main};
        background-color:  ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    > span {
      display: block;
      font-size: 14px;
      color:  ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    > a,
    > button {
      font-size: 0;

      img {
        height: 23px;
      }
    }

    > button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      display: block;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 8px;
    }
  }

`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};
    max-width: 402px;


    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 24px;
    word-break: break-word;
  }

`;
