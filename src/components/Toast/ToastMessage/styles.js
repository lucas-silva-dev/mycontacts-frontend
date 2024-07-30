import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
`;

const messageOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(100%); }
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
};

export const Container = styled.div`
  padding: 16px 32px;
  color: ${({ theme }) => theme.colors.background.lighter};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.toastBoxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${messageIn} 0.3s forwards;

  ${({ type }) => containerVariants[type] || containerVariants.default};


  ${({ $isLeaving }) => $isLeaving && css`animation: ${messageOut} 0.3s forwards;`};

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
