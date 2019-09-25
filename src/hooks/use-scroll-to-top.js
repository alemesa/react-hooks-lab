import { useEffect } from "react";
import { isBrowser } from "../util";

function useScrollToTop() {
  useEffect(() => {
    if (isBrowser) window.scrollTo(0, 0);
  }, []);
}

export default useScrollToTop;
