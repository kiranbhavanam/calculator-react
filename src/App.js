import "./App.css";
import { CatFact } from "./CatFact";
import Animal from "./example/Animal.jsx";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const animals = { k: 1, k2: "tiger" };
  // const {a,b,c}=example;
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/catfact" element={<CatFact />} />
        </Routes>
      </Router>
      <Link path="/cat" element={<CatFact />}></Link> */}
      <Animal id={animals.k} name={animals.k2} />
      <CatFact></CatFact>
    </div>
  );
}

export default App;
