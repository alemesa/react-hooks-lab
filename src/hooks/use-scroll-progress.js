import { useEffect, useState } from "react";

const useScrollProgress = ref => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      const math = (100 * window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
      setProgress(math.toFixed(0));
    };

    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
