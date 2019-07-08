import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

class About extends Component {
  render () {
    return (
      <div className="section-dark about-page">
        <div className="section-content" id="about" style={{width: '100%', margin: 'auto'}}>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;Yanran (Erin) Qian</h1>
            <Grid className="demo-grid-ruler">
              <Cell col={6} className="about-cell">
                <i className="fab fa-github"></i>
                <h3>yyyan97@gmail.com</h3>
                <p>Student at University of Maryland</p>
                <p>Junior Software Engineer / Web Developer</p>
              </Cell>
              <Cell col={6} className="about-cell">
                <p><b>Education: </b>University of Maryland, College Park</p>
                <p><b>Expected Graduation: </b>May 2020</p>
                <p><b>Major: </b>Computer Science</p>
                <p><b>Programming languages: </b>Java, HTML, JavaScript, PHP, Swift</p>
              </Cell>
            </Grid>

        </div>
      </div>
    );
  }
}

export default About;
