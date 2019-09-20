import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);
}

export default useScrollToTop;
