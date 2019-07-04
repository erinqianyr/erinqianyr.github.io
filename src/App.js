import React, { Component } from "react";
import "./App.css";
import {Grid, Cell} from "react-mdl";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About/>
        <Section
          title="Experiences"
          dark={false}
          id="section3"
        />
        <Section
          title="Projects"
          dark={true}
          id="section4"
        />
        <Section
          title="Section 5"
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
