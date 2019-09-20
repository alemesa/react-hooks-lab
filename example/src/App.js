import React from "react";
import { useWindowSize } from "react-hooks-lab";

const App = () => {
  const windowSize = useWindowSize(100);

  return (
    <>
      <span>
        {windowSize.innerWidth},{windowSize.innerHeight}
      </span>
    </>
  );
};
export default App;
