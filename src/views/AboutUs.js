import React from 'react';
// import sections
import LearnMore from '../components/sections/LearnMore';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';
import AboutHero from '../components/sections/about/AboutHero';
import NewsReleases from '../components/sections/about/NewsReleases';

const AboutUs = () => {
  return (
    <>
      {/* <HeroNoImg className='illustration-section-01' /> */}
      <AboutHero className='illustration-section-01' />
      <NewsReleases />
      {/* <LearnMore
        invertMobile
        topDivider
        imageFill
        // className='illustration-section-02'
      /> */}
      <Cta split />
    </>
  );
};

export default AboutUs;
