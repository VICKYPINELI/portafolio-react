import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col  md={12} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  QUIERES <span className="purple"> CONOCER </span> MÁS SOBRE MI.
                </h1>
          </Col>
        <Col lg={3}  md={12}  className="myAvtar">
            <Tilt> <img src={myImg} className="img-fluid" alt="avatar" /></Tilt>
          </Col>
          <Col lg={9}  md={12} className="home-about-description">
            <p  style={{ textAlign: "justify" }} className="home-about-body">
              Manejo con fluidez clásicos como
              <i>
                <b className="purple"> html, css , Javascript and Python. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es la creación de &nbsp;
              <i>
                <b className="purple">nuevas tecnologías y productos web{" "}</b> 
                 asì como  también en áreas relacionadas con el Data science como son: {" "}
                <b className="purple">
                  Deep  and Matching Learning.
                </b>
              </i>
              <br />
              <br />
              Siempre que puedo, también aplico mi pasión por desarrollar productos con {" "}
              {/* <b className="purple">Node.js</b> y  */}
              <i>
                <b className="purple">
                  {" "}
                  librerias y frameworks mas modernos 
                </b>
              </i>
              &nbsp; como
              <i><b className="purple"> VUE.js, React.js and Next.js</b></i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SI  <span className="purple">QUIERES CONTACTAR </span> CONMIGO</h1>
            <p>
            Aqui tambièn{' '}<span className="purple">puedes encontrarme. </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href= "https://github.com/VICKYPINELI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vickypineroelices/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vickypineroelices/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
