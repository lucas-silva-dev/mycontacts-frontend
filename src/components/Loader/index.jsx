import PropTypes from 'prop-types';

import { ReactPortal } from '../ReactPortal';
import Spinner from '../Spinner';
import { Overlay } from './styles';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);
  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={animatedElementRef} isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
