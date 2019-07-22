import React, {Component} from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

class About extends Component {
  render () {
    return (
      <div className="section about-page">
        <div className="section-content" id="about" style={{width: '100%'}}>

        <Container>
            <Row>
              <Col className="mx-auto about-cell" lg="6" md="12">
                <h3 style={{marginTop:'0px'}}>Yanran (Erin) Qian</h3>
                <br/>
                <p>Student at University of Maryland</p>
                <p>Junior Software Engineer / Web Developer</p>
                <br/>
              </Col>
              <Col className="mx-auto about-cell" lg="6" md="12">
                <i className="far fa-envelope"></i>
                <p style={{display:'inline'}}>yyyan97@gmail.com</p><br/>
                <i className="fas fa-phone"></i>
                <p style={{display:'inline'}}>832-652-4452</p><br/>
                <i className="fas fa-map-marker-alt"></i>
                <p style={{display:'inline'}}>College Park, MD</p><br/>
                <i className="fab fa-github"></i>
                <p  style={{display:'inline'}}><a href="https://github.com/yyyan97" target="_blank">https://github.com/yyyan97</a></p><br/>
              </Col>
              <Col className="mx-auto about-cell" lg="12" md="12">
              <hr/>
              </Col>
              <Col className="mx-auto about-cell" lg="6" md="12">
                <br/>
                <p><b>Education: </b>University of Maryland, College Park</p>
                <p><b>Expected Graduation: </b>May 2020</p>
                <p><b>Major: </b>Computer Science</p>
                <p><b>Relevant Classes: </b>Object-Oriented Programming, Intro to
                  Computer Systems, Organization of Programming
                  Languages, Algorithms, Data Structures, Database Design,
                  Computer Systems Architecture, Intro to JavaScript</p>
              </Col>
              <Col className="mx-auto about-cell" lg="6" md="12">
                <p><b>Website Development Languages: </b>JavaScript, HTML, CSS, PHP</p>
                <p><b>Object Oriented Languages: </b>Java, Ruby</p>
                <p><b>Tools & Frameworks: </b>XAMPP server, Git, JQuery/AJAX, React.js, Node.js, Express.js</p>
                <p><b>Database Concepts: </b>SQL, MongoDB</p>
                <p><b>Version Control Tools: </b>Git, Apache Subversion</p>
                <p><b>Mobile Development: </b>Swift and XCode</p>
              </Col>
            </Row>
          </Container>



        </div>
      </div>
    );
  }
}

export default About;
