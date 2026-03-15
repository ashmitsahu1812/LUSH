import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

const Home = ({ setNavOpen }) => {
  return (
    <>
      <Hero onExploreClick={() => setNavOpen(true)} />
      <About />
      <Projects />
    </>
  );
};

export default Home;
