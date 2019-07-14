import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import IndexHeader from "./Components/IndexHeader.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar id="top"/>
        <IndexHeader/>
        <About/>
        <Section
          title="Experiences"
          dark={true}
          id="section3"
        />
        <Section
          title="Projects"
          dark={false}
          id="section4"
        />
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
