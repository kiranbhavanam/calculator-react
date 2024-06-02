import React, { useContext } from "react";
import { Context } from "./UseContext";
const Login = () => {
  const { setUser } = useContext(Context);
  return (
    <div>
      Login
      <br />
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
