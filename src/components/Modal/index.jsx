import { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger, id, isVisible }) {
  const [visibility, setIsVisibility] = useState(isVisible);

  if (!visibility) {
    return null;
  }

  const handleChangeVisibility = () => {
    setIsVisibility(!isVisible);
  };

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <strong>{id}</strong>
        <p>Corpo do modal</p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={handleChangeVisibility}
          >
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  danger: false,
};
