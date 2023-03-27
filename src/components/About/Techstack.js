import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiPython,
  DiCss3,
  DiBootstrap,
  DiSass,
} from "react-icons/di";
import {
  SiSqlite,
  SiNextdotjs,
  SiFlask,
  SiVuedotjs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <  DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiSass/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      < SiVuedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiSqlite />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

    </Row>
  );
}

export default Techstack;
