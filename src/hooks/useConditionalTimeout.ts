import { useCallback, useEffect, useRef, useState } from 'react';
import { usePrevious } from './usePrevious';

const defaultOptions = {
  cancelOnUnmount: true,
  cancelOnConditionChange: true
};

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time from when the condition verifies.
 */
export function useConditionalTimeout(
  fn: () => void,
  milliseconds: number,
  condition: any,
  options = defaultOptions
): [boolean, () => void] {
  const opts = { ...defaultOptions, ...(options || {}) };
  // eslint-disable-next-line no-undef
  const timeout = useRef<NodeJS.Timeout>();
  const callback = useRef<() => void>(fn);
  const [isCleared, setIsCleared] = useState(false);
  const prevCondition = usePrevious(condition);

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsCleared(true);
    }
  }, []);

  // if the provided function changes, change its reference
  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (condition && typeof milliseconds === 'number') {
      timeout.current = setTimeout(() => {
        callback.current();
      }, milliseconds);
    }
  }, [condition, milliseconds]);

  // when the condition change, clear the timeout
  useEffect(() => {
    if (prevCondition && condition !== prevCondition && opts.cancelOnConditionChange) {
      clear();
    }
  }, [condition, options]);

  // when component unmount clear the timeout
  useEffect(
    () => () => {
      if (opts.cancelOnUnmount) {
        clear();
      }
    },
    []
  );

  return [isCleared, clear];
}
