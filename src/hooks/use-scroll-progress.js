import { useEffect, useState } from "react";
import { isBrowser } from "../util";

const useScrollProgress = ref => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      const math = (100 * window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
      setProgress(math.toFixed(0));
    };

    isBrowser && window.addEventListener("scroll", updateHeight);
    return () => {
      isBrowser && window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
