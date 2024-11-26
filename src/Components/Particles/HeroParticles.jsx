/*
   Copyright (C), 2024-2025, William Ruan
   Author: William Ruan
   FileName: HeroParticles.jsx
   Version: 1.0.0
   Creation: 26/11/2024
   Last modification: 26/11/2024
*/

import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
