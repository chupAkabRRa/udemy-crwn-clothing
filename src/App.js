import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component.jsx";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS FOR SALE!</h1>
  </div>
);
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
