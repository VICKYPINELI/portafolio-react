import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Mi nombre es <span className="purple">Mª Victoria Pinero </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />Me formé como administrativa, crecí como emprendedora en el mundo del estilismo y me voy a hacer mayor como programadora full stack. Me considero una persona dinámica, responsable y sin miedo a afrontar nuevos retos, con más de 20 años de experiencia en diferentes trabajos enfocados a la relación con el cliente, facturación y gestión de recursos, trabajos que me han dado muchas satisfacciones y que me han ensañado a desarrollarme tanto profesionalmente, como a valorar e incentivar las buenas relaciones cliente-empresa. En la actualidad estoy involucrada en diferentes proyectos para acercar las nuevas tecnologías a los distintos agentes de la comunidad educativa escolar, que me ha hecho descubrir un mundo apasionante que ha cambiado mi vida profesional, y que a día de hoy, este volcada en adquirir los conocimientos necesarios para poder en un futuro próximo, desarrollar aplicaciones web en el ámbito de las nuevas metodologías educativas, basadas en inteligencias múltiples, la gamificación y el autoaprendizaje. 🤷‍♂️
       
            <br />
            <br />
            Además de programar, estas son algunas  aficiones  que me encanta realizar!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Cocinar
            </li>
            <li className="about-activity">
              <ImPointRight /> Bricolage y restauracion de muebles usados
            </li>
            <li className="about-activity">
              <ImPointRight />Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
