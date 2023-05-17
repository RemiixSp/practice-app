import { DependencyList, useEffect } from 'react';

export const useDebounce = (
  milisecs: number,
  func: () => void,
  dependency: DependencyList,
): any => {
  useEffect(() => {
    const timer = setTimeout(func, milisecs);

    return () => clearTimeout(timer);
  }, dependency);
};
