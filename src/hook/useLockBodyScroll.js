import { useEffect } from 'react';

const useLockBodyScroll = ( isOpen ) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
    return () => (document.body.style.overflow = 'visible');
  }, [isOpen]);
}
export default useLockBodyScroll;