import React, { useRef } from "react";

const UseRef = () => {
  const ref = useRef(null);
  const ChangeVal = () => {
    console.log(`Hello I am displayed with ${ref.current.value}`);
    ref.current.value = "";
  };
  return (
    <div>
      <h3>UseRef</h3>
      <input type="text" placeholder="enter value" ref={ref} />
      <button onClick={ChangeVal}>Click</button>
    </div>
  );
};

export default UseRef;
