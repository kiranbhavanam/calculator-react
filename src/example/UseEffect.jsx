import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`its useffect and count change to: ${count}`);
    if (count == 1) setCount(0);
    else setCount(0);
  }, [count]);
  //   console.log(`its notuse effect and count:${count}`);

  return (
    <div>
      <h2>Data at the moment: {count}</h2>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        update
      </button>
    </div>
  );
};

export default UseEffect;
