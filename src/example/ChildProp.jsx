import React from "react";

function ChildProp({car}) {
  console.log(car);
  const { name, price, year, model } = car;
  return (
    <div>
      {/* <div>ChildProp {name}</div>
      <div>child {year}</div>
      <div>{price}</div>
      <div> model is{model}</div> */}
      <ul className="mainbar">
        <li> Name :{name}</li>
        <li>Price: {price}</li>
        <li>Year:{year}</li>
      </ul>
    </div>
  );
}

export default ChildProp;
