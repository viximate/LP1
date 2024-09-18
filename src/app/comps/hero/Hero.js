import React from "react";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero parent bg-img-cover">
      <div className="cont hero-cont">
        <p className="section-indicator">Creative agency & web development</p>
        <h1 className="text-center">
          We make unforgettable<br /> digital experiences.
        </h1>
        <p className="sub-heading text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam vitae assumenda architecto obcaecati quo eos animi beatae, rerum vero sapiente possimus quasi nam, hic quos ullam quis dolorum, mollitia?
        </p>
        <a className="btn" href="#contact">Get Started</a>
        <div className="scroll-icon"></div>
      </div>
    </div>
  );
}

export default Hero;
