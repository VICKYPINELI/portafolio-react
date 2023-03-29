import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeLogo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12}  lg={7 }className="home-header">
              <div  style={{height: 200}} >
                  <h1 style={{ paddingBottom: 10 }} className="heading"> <Type /></h1>
                  {/* <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> */}
                  {/* <h1 className="heading-name"><Type1 /></h1> */}
              </div>
              <div style={{ padding: 60, textAlign: "left" }}>
              <strong  className="main-description">  Full Stak Developer junior.</strong>
              </div>
            </Col>

            <Col md={12}  lg={5} style={{ paddingBottom: 10 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
