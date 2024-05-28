import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { data: state.data + 1, text: state.text };
    case "display":
      return { data: state.data, text: !state.text };
    default:
      return state;
  }
};
const UseReducer = () => {
  // const [data, setData] = useState(0);
  // const [text, setText] = useState(false);
  // const showText = () => {
  //   setText(!text);
  //   setData(data + 1);
  // };

  const [state, dispatch] = useReducer(reducer, { data: 0, text: false });
  return (
    <div>
      UseReducer
      <h3>data: {state.data}</h3>
      <button onClick={()=>{dispatch({ type: "Increment" })}}>
        {!state.text ? "show" : "hide"}
      </button>
      <h3>text:{state.text && "Hey its all okay"}</h3>
    </div>
  );
};

export default UseReducer;
