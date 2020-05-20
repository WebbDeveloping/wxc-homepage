import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import ConsumerTiles from '../components/sections/ConsumerTiles';
import PhoneAppSection from '../components/sections/PhoneAppSection';
import GetApp from '../components/sections/GetApp';
import NewHeader from '../components/sections/partials/NewHeader';

const Consumer = () => {
  return (
    <>
      {/* <LearnMore invertMobile topDivider imageFill /> */}
      <NewHeader
        textBox={'new-header__text-box'}
        className={'new-header-consumer sm-hide'}
        title={'A Better Way To Pay'}
        // subheading={'when you know your purchase was safe, secure and private.'}
        titleClass={'title-class'}
        subClass={'subheading-class'}
      />
      <ConsumerTiles className='reveal-from-top sm-pt-0' />
      <PhoneAppSection topDivider />
      <GetApp />
      <Cta split />
    </>
  );
};

export default Consumer;
