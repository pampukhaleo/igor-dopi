import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);
  console.log('render useWindowSize')
  useEffect(() => {

    function handleResize() {
      setWindowSize(window.innerWidth);
      console.log('render handleResize')
    }

    console.log('render useEffect')

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
