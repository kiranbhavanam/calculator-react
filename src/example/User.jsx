import React, { useContext } from "react";
import { Context } from "./UseContext";
const User = () => {
  const {user} = useContext(Context);
  return (
    <div>
      <h1>User:{user}</h1>
    </div>
  );
};

export default User;
 