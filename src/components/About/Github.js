import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="title-heading" style={{ paddingBottom: "20px" }}>
        Mis <strong className="purple">Coder</strong> days
      </h1>
      <GitHubCalendar
        username="VICKYPINELI"
        blockSize={15}
        blockMargin={5}
        color="#f608f6"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
