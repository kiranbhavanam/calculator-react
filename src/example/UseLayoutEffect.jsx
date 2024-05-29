import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { UseImperative } from "./UseImperative";
const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  const countRef = useRef();
  useEffect(() => {
    countRef.current.value = "kiran";
    console.log(count, "In useEffect", countRef.current.value);
  }, [count]);
  useLayoutEffect(() => {
    console.log(count, "In useLayoutEffect", countRef.current.value);
  }, [count]);
  return (
    <div>
      UseLayoutEffect
      <h3>{count}</h3>
      <input type="text" ref={countRef} value="Reddy" />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      {console.log()}
      <button onClick={
        ()=>{buttonRef.current.modifyVisibility()}}>Parent button</button>
      <UseImperative ref={buttonRef} />
    </div>
  );
};

export default UseLayoutEffect;
