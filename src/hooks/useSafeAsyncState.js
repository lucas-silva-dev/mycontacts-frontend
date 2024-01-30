import { useState, useCallback } from 'react';
import useIsMounted from './useIsMounted';

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  const setSafeAsyncState = useCallback((newState) => {
    if (isMounted()) {
      setState(newState);
    }
  }, [isMounted]);

  return [state, setSafeAsyncState];
}
