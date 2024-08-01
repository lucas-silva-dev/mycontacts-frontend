import PropTypes from 'prop-types';

import { Container, Footer, Overlay } from './styles';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import Button from '../Button';
import { ReactPortal } from '../ReactPortal';

export default function Modal({
  danger = false,
  title,
  children,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
  isVisible,
  isLoading = false,
}) {
  const { shouldRender, animatedElementRef: overlayRef } = useAnimatedUnmount(isVisible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay $isLeaving={!isVisible} ref={overlayRef}>
        <Container $danger={danger} $isLeaving={!isVisible}>
          <strong>
            {title}
          </strong>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
