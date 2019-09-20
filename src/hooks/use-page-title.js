import { useEffect } from "react";

const setPageTitle = title => {
  document.title = title;
};

const setPageTitle = (title, defaultTitle = "Home Page") => {
  useEffect(() => {
    setPageTitle(title);

    return () => {
      setPageTitle(defaultTitle);
    };
  }, [title]);
};

export default usePageTitle;
