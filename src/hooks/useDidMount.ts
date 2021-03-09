import { useEffect } from 'react';
import { createHandlerSetter } from './hookutils/createHandlerSetter';

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
export function useDidMount(handler: () => void): (nextCallback: () => void) => void {
  const [onMountHandler, setOnMountHandler] = createHandlerSetter(handler);

  useEffect(() => {
    onMountHandler.current?.();
  }, []);

  return setOnMountHandler;
}
