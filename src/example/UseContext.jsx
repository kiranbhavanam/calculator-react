import React, { createContext,useState } from "react";
import Login from "./Login";
import User from "./User";
export const Context = createContext(null);
const UseContext = () => {
  const [user, setUser] = useState("hello");
  return (
    <Context.Provider value={{ user, setUser }}>
      UseContext
      <Login />
      <User />
    </Context.Provider>
  );
};

export default UseContext;
