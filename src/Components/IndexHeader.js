/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
      <div
        className="page-header section"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/background.svg") + ")"
        }}
      >
        <div className="content-center">
          <Container>
            <div className="title-brand animated fadeIn">
              <h1 className="name animated infinite pulse" style={{fontSize:"3em"}}>Yanran (Erin) Qian</h1>

            </div>

          </Container>
        </div>


      </div>
  );
}

export default IndexHeader;
