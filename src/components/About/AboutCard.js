import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Mi nombre es <span className="purple">Mª Victoria Pinero, </span>
              y  vivo <span className="purple"> Barakaldo (Bizkaia).</span>
              <br />
              <br />Me formé como administrativa, crecí como emprendedora en el mundo del estilismo 
                y me voy a hacer mayor como <span className="purple"> programadora full stack.</span>
              <br />
              <br />
              Me considero una persona dinámica, responsable y sin miedo a afrontar nuevos retos,
              <span className="purple"> con más de 20 años de experiencia </span>
              en diferentes trabajos enfocados a la relación con el cliente, facturación y gestión de recursos, trabajos  que
              <span className="purple"> me han dado muchas satisfacciones </span>
               como a valorar e incentivar las buenas relaciones cliente-empresa.
              <br />
              <br /> En la actualidad estoy involucrada en diferentes proyectos para acercar las nuevas tecnologías
                a los distintos agentes de la comunidad educativa escolar, que me ha hecho
                <span className="purple"> descubrir un mundo apasionante que ha cambiado mi vida profesional, </span> 
                y que a día de hoy, este volcada en adquirir los conocimientos necesarios para poder en un futuro próximo, 
                <span className="purple"> desarrollar aplicaciones web </span>
                👩‍💻 en el ámbito de las nuevas metodologías educativas, 
                basadas en inteligencias múltiples, la gamificación y el autoaprendizaje. 🤷‍♂️
              <br />
              <br />
              <span className="purple">Ademàs de programar, </span>  estas son algunas  aficiones  que me encanta realizar!
          </p>
          <ul>
            <li className="about-activity">
              💜 Cocinar
            </li>
            <li className="about-activity">
              💜  Bricolage y restauracion de muebles usados.
            </li>
            <li className="about-activity">
              💜  Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
