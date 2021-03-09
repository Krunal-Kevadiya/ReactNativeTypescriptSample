import React, { useCallback, useRef } from 'react';

export function createHandlerSetter(
  handlerValue: () => void
): [React.MutableRefObject<() => void>, (nextCallback: () => void) => void] {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlerRef = useRef<() => void>(handlerValue);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const setHandler = useCallback(
    (nextCallback: () => void) => {
      handlerRef.current = nextCallback;
    },
    [handlerRef]
  );

  return [handlerRef, setHandler];
}
