import React from "react";
import WholeText from "./WholeText";
import "../Css/App.css";
import "../Css/Modal.css";
import Input from "./Input";

const Home = () => {
  return (
    <div className="body">
      <div className="hero">
        <div className="hero.overlay"></div>
        <h1 id="po">For cat lovers</h1>
        <h2 id="pa">Learn everything about these small lions</h2>
      </div>
      <Input />
      <WholeText />
    </div>
  );
};

export default Home;
