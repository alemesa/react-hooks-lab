import React from "react";
import { useMousePosition } from "react-hooks-lab";

const Component = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <div>
        <h2>Mouse Position Hook</h2>
        Mouse position x: {x}
        <br />
        Mouse position y: {y}
      </div>
    </>
  );
};
export default Component;
