import React from 'react';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactForm from '../components/sections/contact/ContactForm';
import NorthRollOut from '../components/sections/NorthRollOut';
import NewHeader from '../components/sections/partials/NewHeader';
// import BankTiles from '../components/sections/bankers/BankTiles';

const Contact = () => {
  return (
    <>
      {/* <NewHeader /> */}
      <ContactHero />
      <ContactForm />
      <NorthRollOut />
    </>
  );
};

export default Contact;
