import React from "react";
import { Container, Row } from "react-bootstrap";


const demos = {
  soundcloud:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23229.543536980116!2d-2.988154427539067!3d43.29975164828883!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1680025978958!5m2!1ses!2ses" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Map() {
  return (
    <Container fluid className="project-card">
    <Row>
        <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
      </Row>
    </Container>
  );
}

export default Map;
