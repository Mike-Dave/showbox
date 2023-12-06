import { useEffect, useRef } from "react";

function useIntersectionObserver(callback, options, dependencies) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [callback, options, dependencies]);

  return observerRef;
}

export default useIntersectionObserver;
