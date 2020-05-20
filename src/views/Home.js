import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import AppDemo from '../components/sections/AppDemo';
import XpayIsComing from '../components/sections/XpayIsComing';
import NorthRollOut from '../components/sections/NorthRollOut';
import NewHeader from '../components/sections/partials/NewHeader';
import VideoSection from '../components/sections/VideoSection';

const Home = () => {
  return (
    <>
      {/* <Hero className='illustration-section-01 reveal-from-right' /> */}
      <NewHeader />
      <FeaturesTiles />
      <AppDemo invertMobile topDivider imageFill />
      <NorthRollOut />
      <XpayIsComing topDivider />
      <VideoSection />
      <Cta split />
    </>
  );
};

export default Home;
