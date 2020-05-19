import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import ConsumerTiles from '../components/sections/ConsumerTiles';
import PhoneAppSection from '../components/sections/PhoneAppSection';
import GetApp from '../components/sections/GetApp';

const Consumer = () => {
  return (
    <>
      {/* <LearnMore invertMobile topDivider imageFill /> */}
      <ConsumerTiles className='illustration-section-01 reveal-from-top' />
      <PhoneAppSection topDivider className='illustration-section-02' />
      <GetApp className='illustration-section-01' />
      <Cta split />
    </>
  );
};

export default Consumer;
