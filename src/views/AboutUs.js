import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import AboutHero from '../components/sections/about/AboutHero';
import NewsReleases from '../components/sections/about/NewsReleases';

const AboutUs = () => {
  return (
    <>
      <AboutHero
        className='illustration-section-01 reveal-from-right'
        title={'About World XChange Inc'}
      />
      <NewsReleases />
      <Cta split />
    </>
  );
};

export default AboutUs;
