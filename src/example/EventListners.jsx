import React, { useEffect, useState } from "react";

const EventListners = () => {
  const [text, setText] = useState("kiran");
  const [nameText, setNameText] = useState("");
  const [dim, setDim] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const changeText = (e) => {
    setText(e.target.value);
    console.log("button clicked");
  };
  const updateName = () => {
    setNameText(text);
  };

  useEffect(() => {
    const handleSize = () => {
      setDim({ height: window.innerHeight, width: window.innerWidth });
      console.log("window resized:", dim.height, dim.width);
    };
    window.addEventListener("resize", handleSize);

    // document.querySelector('.name').addEventListener('onChange',changeText)
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [text]);

  return (
    <div>
      The dimensions of window
      <h3>Height : {dim.height}</h3>
      <h3>Width : {dim.width}</h3>
      <section>
        <input
          type="text"
          className="name"
          placeholder="name"
          onChange={changeText}
        />
        <button onClick={updateName}>Submit</button>
        <h3>{nameText}</h3>
      </section>
    </div>
  );
};

export default EventListners;
