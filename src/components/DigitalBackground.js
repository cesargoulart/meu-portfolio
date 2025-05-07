import React, { useCallback, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './DigitalBackground.css';

function DigitalBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Adiciona a grade de fundo separadamente
  useEffect(() => {
    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid';
    document.querySelector('#tsparticles')?.appendChild(gridDiv);
    
    return () => {
      document.querySelector('#tsparticles .grid')?.remove();
    };
  }, []);

  return (
    <div className="digital-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#111",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#4db5ff",
            },
            links: {
              color: "#4db5ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 1.5,
              direction: "none",
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            glow: {
              enable: true,
              color: "#4db5ff",
              blur: 5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default DigitalBackground;