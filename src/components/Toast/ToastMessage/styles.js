import styled, { css } from 'styled-components';

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

  ${({ type }) => containerVariants[type] || containerVariants.default};

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
