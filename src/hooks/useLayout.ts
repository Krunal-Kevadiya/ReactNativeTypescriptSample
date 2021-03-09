import { useCallback, useState } from 'react';

export function useLayout(): [(e: any) => void, number, number, number, number] {
  const [layout, setLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  const onLayout = useCallback((e) => setLayout(e.nativeEvent.layout), []);

  return [onLayout, layout.x, layout.y, layout.width, layout.height];
}
