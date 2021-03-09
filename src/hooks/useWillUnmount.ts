import { useEffect } from 'react';
import { createHandlerSetter } from './hookutils/createHandlerSetter';

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
export function useWillUnmount(handler: () => void): (nextCallback: () => void) => void {
  const [onUnmountHandler, setOnUnmount] = createHandlerSetter(handler);

  useEffect(
    () => () => {
      onUnmountHandler.current?.();
    },
    []
  );

  return setOnUnmount;
}
