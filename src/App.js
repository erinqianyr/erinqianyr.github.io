import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import IndexHeader from "./Components/IndexHeader.js";
import Experience from "./Components/Experience.js";
import Projects from "./Components/Projects.js";

import "./assets/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
import "./assets/demo/demo.css";
import './index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar id="top"/>
        <IndexHeader/>
        <About/>
        <Experience/>
        <Projects/>
        <Section
          title="Section 5"
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
