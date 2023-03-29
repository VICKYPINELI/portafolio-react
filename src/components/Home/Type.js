import React from "react";
import Typewriter from "typewriter-effect";
// import wave from  "./style.css";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Kaixo!  <br> Vicky naiz ",
          "¡Hola!,  <br> Soy Vicky.",
          "Hi!, <br> I'm Vicky.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: "natural",
        delay: "natural",
        pauseFor:1500,
      }}
    />
  );
}

export default Type;
