import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import AboutHero from '../components/sections/about/AboutHero';
import Elevator from '../components/sections/about/Elevator';
import Founders from '../components/sections/about/Founders';

const Press = () => {
  return (
    <>
      <AboutHero
        className='illustration-section-01 reveal-from-right'
        title={`"It's about time someone figured this out!"`}
        paragraph={
          'The most common response we hear from new partners and clients.'
        }
      />
      <Elevator />
      <Founders />
      {/* <NewsReleases /> */}
      <Cta split />
    </>
  );
};

export default Press;
