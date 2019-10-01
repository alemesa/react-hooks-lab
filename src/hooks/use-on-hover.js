import { useEffect } from "react";
import { isBrowser } from "../util";

const useHover = (ref, inCallback, outCallback) => {
  useEffect(() => {
    if (isBrowser) {
      ref.current.addEventListener("mouseenter", inCallback);
      ref.current.addEventListener("mouseleave", outCallback);
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener("mousemove", inCallback);
        window.removeEventListener("mousemove", outCallback);
      }
    };
  }, []);
};

export default useHover;
