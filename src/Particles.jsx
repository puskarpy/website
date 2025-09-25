import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./particle.json";

function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    // Load the slim version of tsparticles (recommended for better performance)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // Optional: log when particles are loaded
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  );
}

export default ParticlesBackground;