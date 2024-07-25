import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  background: ${({ theme }) => theme.colors.background.blur};
  backdrop-filter: blur(3.5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s forwards;

  ${({ $isLeaving }) => $isLeaving && css`
    animation: ${fadeOut} 0.3s forwards;
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;
  border-radius: 4px;
  background-color:  ${({ theme }) => theme.colors.background.lighter};
  box-shadow:  ${({ theme }) => theme.boxShadow};
  animation: ${scaleIn} 0.3s forwards;

  > strong {
    font-size: 22px;
    color: ${({ theme, $danger }) => ($danger ? theme.colors.danger.main : theme.colors.gray[900])}
  }

  .modal-body {
    margin-top: 32px
  }

  ${({ $isLeaving }) => $isLeaving && css`
    animation: ${scaleOut} 0.3s forwards;
  `}
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;
    margin-right: 24px;

    &[disabled] {
      cursor: not-allowed;
    }
  }

`;
