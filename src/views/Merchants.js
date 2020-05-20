import React from 'react';
import Cta from '../components/sections/Cta';
import MerchantTiles from '../components/sections/merchants/MerchantTiles';
import SalesFunnel from '../components/sections/merchants/SalesFunnel';
import IntroPushSale from '../components/sections/merchants/IntroPushSale';
import GuaranteedFraudProof from '../components/sections/merchants/GuaranteedFraudProof';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import SimpleIntegration from '../components/sections/merchants/SimpleIntegration';
import NewHeader from '../components/sections/partials/NewHeader';

const Merchants = () => {
  return (
    <>
      <NewHeader
        className={'new-header-merchant sm-hide'}
        textBox={'new-header__text-box'}
        title={'Cashless Made Effortless'}
        // subheading={'when you know your purchase was safe, secure and private.'}
        titleClass={'title-class'}
        subClass={'subheading-class'}
      />
      <MerchantTiles
        className='reveal-from-top sm-pt-0'
        title={'Show You Care'}
        paragraph={'By providing your customers with a private way to pay.'}
        tileOneHead={'ACCEPT XPAY ONLINE'}
        tileOneText={
          'Give your online customers a greatly improved check-out experience that is faster, easier, private and fraud-proof.'
        }
        tileTwoHead={'ACCEPT XPAY IN-PERSON'}
        tileTwoText={
          'Provide a fraud-free experience in your establishment that is easier to use and gives customers increased privacy.'
        }
        tileThreeHead={'ACCEPT XPAY ON-PHONE'}
        tileThreeText={
          "Increase privacy and security while taking payments over the phone where the customer doesn't have to verbally read card information."
        }
        heroImg={'new-header-merchant lg-hide'}
      />
      <SalesFunnel />
      <IntroPushSale />
      <GuaranteedFraudProof />
      <ProcessingFees />
      <SimpleIntegration />
      <Cta split />
    </>
  );
};

export default Merchants;
