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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Quieres <span className="purple"> CONOCER </span> más sobre mi
            </h1>
            <p  style={{ textAlign: "justify" }} className="home-about-body">
            {/* Me formé como administrativa, crecí como emprendedora en el mundo del estilismo y me voy a hacer mayor como programadora full stack.
Me considero una persona dinámica, responsable y sin miedo a afrontar nuevos retos, con más de 20 años de experiencia en diferentes trabajos enfocados a la relación con el cliente, facturación y gestión de recursos, trabajos que me han dado muchas satisfacciones y que me han ensañado a desarrollarme tanto profesionalmente, como a valorar e incentivar las buenas relaciones cliente-empresa.
En la actualidad estoy involucrada en diferentes proyectos para acercar las nuevas tecnologías a los distintos agentes de la comunidad educativa escolar, que me ha hecho descubrir un mundo apasionante que ha cambiado mi vida profesional, y que a día de hoy, este volcada en adquirir los conocimientos necesarios para poder en un futuro próximo, desarrollar aplicaciones web en el ámbito de las nuevas metodologías educativas, basadas en inteligencias múltiples, la gamificación y el autoaprendizaje. 🤷‍♂️ */}
              <br />
              <br />Manejo con fluidez clásicos como
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
              <i>
                <b className="purple"> VUE.js, React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>QUIERES CONTACTAR CONMIGO</h1>
            <p>
            Aqui tambièn{' '}<span className="purple">puedes encontrarme </span>
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
