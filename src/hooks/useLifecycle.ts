import { useDidMount } from './useDidMount';
import { useWillUnmount } from './useWillUnmount';

/**
 * Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
 * It is intended as a shortcut to those hooks.
 */
export function useLifecycle(
  mount: () => void,
  unmount: () => void
): [(nextCallback: () => void) => void, (nextCallback: () => void) => void] {
  const onDidMount = useDidMount(mount);
  const onWillUnmount = useWillUnmount(unmount);

  return [onDidMount, onWillUnmount];
}
