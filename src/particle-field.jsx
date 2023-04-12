import React from "react";
import Particles from "react-particles-js";

export default function ParticleField() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            },
            background: {
              color: {
                  value: "#d3841c",
              },
            },
          
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    </div>
  );
}
