import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";

class About extends Component {
  render () {
    return (
      <div className="section about-page">
        <div className="section-content" id="about" style={{width: '100%'}}>

            <Grid className="demo-grid-ruler">
              <Cell col={6} className="about-cell">
                <h3 style={{marginTop:'0px'}}>Yanran (Erin) Qian</h3>
                <br/>
                <p>Student at University of Maryland</p>
                <p>Junior Software Engineer / Web Developer</p>
                <br/>

              </Cell>

              <Cell col={6} className="about-cell" style={{paddingTop:'20px'}}>
                <i className="far fa-envelope"></i>
                <p style={{display:'inline'}}>yyyan97@gmail.com</p><br/>
                <i className="fas fa-phone"></i>
                <p style={{display:'inline'}}>832-652-4452</p><br/>
                <i className="fas fa-map-marker-alt"></i>
                <p style={{display:'inline'}}>College Park, MD</p><br/>
                <i className="fab fa-github"></i>
                <p  style={{display:'inline'}}><a href="https://github.com/yyyan97" target="_blank">https://github.com/yyyan97</a></p><br/>
              </Cell>
              <hr/>
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
