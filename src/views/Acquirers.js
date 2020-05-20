import React from 'react';
import Cta from '../components/sections/Cta';
import MerchantTiles from '../components/sections/merchants/MerchantTiles';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import CompetitiveAdvantage from '../components/sections/isos/CompetitiveAdvantage';
import NewHeader from '../components/sections/partials/NewHeader';

const Acquirer = () => {
  return (
    <>
      <NewHeader
        className={'new-header-acquirer sm-hide'}
        textBox={'new-header__text-box'}
        title={'Cashless Made Effortless'}
        titleClass={'title-class'}
        subClass={'subheading-class'}
      />
      <MerchantTiles
        className='sm-pt-0 reveal-from-top'
        title={'Add XPay to your product and service offerings,'}
        paragraph={
          'strengthen current relationships and exponentially grow your client base.'
        }
        tileOneHead={'ONLINE MERCHANTS'}
        tileOneText={
          'Offer XPay to your online merchants and eliminate transaction fraud.'
        }
        tileTwoHead={'OFFLINE MERCHANTS'}
        tileTwoText={
          'Offer a fraud-free solution to all your retail merchants with minimal setup expense.'
        }
        tileThreeHead={'XPAY ON-PHONE'}
        tileThreeText={
          'XPay is also extremely effective in eliminating transaction fraud over the phone.'
        }
        heroImg={'new-header-acquirer lg-hide'}
      />
      <CompetitiveAdvantage />
      <ProcessingFees />
      <Cta split />
    </>
  );
};

export default Acquirer;
