import React, { Component } from "react";
import {
  
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

class Projects extends Component {
  render () {
    return (
      <div className="section experience-page">
      <div className="section-content" id="projects" style={{width: '100%'}}>
      <h3>Projects</h3>
      <br/>
      <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
              </Card>

            </Col>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
              </Card>

            </Col>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>
              </Card>

            </Col>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Welcome</h3>

              </Card>

            </Col>
          </Row>
        </Container>
        </div>
        </div>
      );
    }
  }

  export default Projects;
