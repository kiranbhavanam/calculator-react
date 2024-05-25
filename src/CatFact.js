import Axios from "axios";
import { useState, useEffect } from "react";
export const CatFact = () => {
  const [fact, setFact] = useState("");
  const getFact = () => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      console.log(response.data.fact);
      setFact(response.data.fact);
    });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <button onClick={getFact}>getFact</button>
      <p>{fact}</p>
    </div>
  );
};
