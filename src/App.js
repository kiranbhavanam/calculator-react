import "./App.css";
import { CatFact } from "./CatFact";
import Animal from "./example/Animal.jsx";
import EventListners from "./example/EventListners.jsx";
import ParentProp from "./example/ParentProp.jsx";
import UseEffect from "./example/UseEffect.jsx";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // const animals = { k: 1, k2: "tiger" };
  // const {a,b,c}=example;
  return (
    <div className="App">
      {/* <ParentProp></ParentProp> */}
      {/* <UseEffect /> */}
      <EventListners/>
    </div>
  );
}

export default App;
