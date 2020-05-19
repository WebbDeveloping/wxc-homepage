import React from 'react';
import Cta from '../components/sections/Cta';
import GuaranteedFraudProof from '../components/sections/merchants/GuaranteedFraudProof';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import SimpleIntegration from '../components/sections/merchants/SimpleIntegration';
import BankerTiles from '../components/sections/bankers/BankerTiles';

const Bankers = () => {
  return (
    <>
      <BankerTiles
        className='illustration-section-01 reveal-from-top'
        title={'Show You Care'}
        paragraph={'By providing your customers with a private way to pay.'}
        tileOneHead={'ACCEPT XPAY PAYMENTS ONLINE'}
        tileOneText={
          'Give your online customers a greatly improved check-out experience that is faster, easier, private and fraud-proof.'
        }
        tileTwoHead={'ACCEPT XPAY IN-PERSON PAYMENTS'}
        tileTwoText={
          'Provide a fraud-free experience in your establishment that is easier to use and gives customers increased privacy.'
        }
        tileThreeHead={'BANK3'}
        tileThreeText={
          'XPay is also extremely effective in eliminating transaction fraud over the phone.'
        }
      />
      <GuaranteedFraudProof />
      <ProcessingFees />
      <SimpleIntegration />
      <Cta split />
    </>
  );
};

export default Bankers;
