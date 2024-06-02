import React, { forwardRef, useImperativeHandle, useState } from "react";

const UseImperative = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    modifyVisibility(){
      setVisible(!visible);
    },
  }));
  return (
    <div>
      <button onClick={()=>{setVisible(!visible)}}>Child button</button>
      <h4>{visible && "I am Iron Man!!!"}</h4>
    </div>
  );
});

export { UseImperative };
