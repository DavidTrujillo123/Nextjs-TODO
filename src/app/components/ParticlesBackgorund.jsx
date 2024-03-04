"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import ParticlesConfig from "@/app/components/config/particle-config.js"

const ParticlesBackgorund = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadFull(engine);
      // await loadSlim(engine);
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => (
      ParticlesConfig
    ),
    [],
  );

  if (init) {
    return (

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        />
    );
  }

  return <></>;
}

export default ParticlesBackgorund;
