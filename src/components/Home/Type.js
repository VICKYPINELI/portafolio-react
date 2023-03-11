import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "kaixo, Vicky naiz",
          "Hola, Me llamo Vicky",
          "Hi! Im Vicky",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
