import { useEffect, useState } from "react";

const useScrollProgress = ref => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      const { height } = ref.current.getBoundingClientRect();

      setProgress(window.scrollY / (height - window.innerHeight));
    };

    updateHeight();

    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
