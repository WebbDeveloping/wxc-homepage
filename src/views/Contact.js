import React from 'react';
import Cta from '../components/sections/Cta';
import GuaranteedFraudProof from '../components/sections/merchants/GuaranteedFraudProof';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import SimpleIntegration from '../components/sections/merchants/SimpleIntegration';
import BankerTiles from '../components/sections/bankers/BankerTiles';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactForm from '../components/sections/contact/ContactForm';
import NorthRollOut from '../components/sections/NorthRollOut';
// import BankTiles from '../components/sections/bankers/BankTiles';

const Contact = () => {
  return (
    <>
      <ContactHero className='illustration-section-01 reveal-from-right' />
      <ContactForm />
      <NorthRollOut />
    </>
  );
};

export default Contact;
