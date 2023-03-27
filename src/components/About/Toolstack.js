import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiBitbucket,
  SiJira,
} from "react-icons/si";
import { CgTrello } from "react-icons/cg";
import { DiScrum, DiGit } from "react-icons/di";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < CgTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      < DiScrum/>
      </Col>
    </Row>
  );
}

export default Toolstack;
