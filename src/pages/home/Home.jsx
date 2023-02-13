import React from 'react';
import Contribute from '../../components/organizations/Contribute';
import Environment from '../../components/organizations/Environment';
import HeroSection from '../../components/organizations/HeroSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <Contribute />
      <Environment />
    </div>
  );
}

export default Home;
