import { useState } from "react";
import ChildProp from "./ChildProp";
import UseEffect from "./UseEffect";
function ParentProp() {
  const car = { name: "xuv", price: 800000, year: 2023 };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div>
      <UseEffect />
      <div>
        <h3>Count :{count}</h3>
        <button onClick={increment}>increment</button>
      </div>
      <ChildProp car={car}></ChildProp>
      <InputState />
      <ToogleVisibility />
      <MultipleStates />
    </div>
  );
}
export default ParentProp;
const InputState = () => {
  const [text, setText] = useState("");
  const changeValue = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input onChange={changeValue}></input>
      <h3>Current Text:{text}</h3>
    </div>
  );
};
const ToogleVisibility = () => {
  const [visible, setVisibile] = useState(true);
  const changeVisibility = () => {
    setVisibile(!visible);
  };
  return (
    <div>
      <button onClick={changeVisibility}>{visible ? "hide" : "show"}</button>
      <h3>{typeof (visible && "Hey good luck")}</h3>
    </div>
  );
};
const MultipleStates = () => {
  const [name, setName] = useState("kiran");
  const [age, setAge] = useState("20");
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <p>name:{name}</p>
      <p>age: {age}</p>
    </div>
  );
};
