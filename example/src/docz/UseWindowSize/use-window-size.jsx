import React from "react";
import { useWindowSize } from "react-hooks-lab";

const WindowSize = () => {
  const { innerWidth, innerHeight } = useWindowSize(100);

  return (
    <div>
      <h2>Window Size Hook</h2>
      window width: {innerWidth}
      <br />
      window height: {innerHeight}
    </div>
  );
};
export default WindowSize;
