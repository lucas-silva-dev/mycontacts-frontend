import styled from 'styled-components';

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
      transform: ${({ $orderBy }) => $orderBy !== 'desc' && 'rotate(180deg)'};
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
