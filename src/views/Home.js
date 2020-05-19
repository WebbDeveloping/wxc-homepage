import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import AppDemo from '../components/sections/AppDemo';
import XpayIsComing from '../components/sections/XpayIsComing';
import NorthRollOut from '../components/sections/NorthRollOut';

const Home = () => {
  return (
    <>
      <Hero className='illustration-section-01 reveal-from-right' />
      <FeaturesTiles />
      <AppDemo invertMobile topDivider imageFill />
      <NorthRollOut />
      <XpayIsComing topDivider />
      <Cta split />
    </>
  );
};

export default Home;
