import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(isVisible) {
  const animatedElementRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }

    const elementRef = animatedElementRef.current;
    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if (!isVisible && elementRef) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isVisible]);

  return {
    shouldRender,
    animatedElementRef,
  };
}
