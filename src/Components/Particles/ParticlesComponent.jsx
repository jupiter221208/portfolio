/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: ParticlesComponent.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const { particlesOptions, className, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;
