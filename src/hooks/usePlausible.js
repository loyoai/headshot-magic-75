import { useCallback } from 'react';

const usePlausible = () => {
  const trackEvent = useCallback((eventName, props = {}) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  }, []);

  return trackEvent;
};

export default usePlausible;