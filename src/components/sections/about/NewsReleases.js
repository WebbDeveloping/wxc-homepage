import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
// import ImageGrid from '../ImageGrid';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const NewsReleases = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              NEWS RELEASES
            </h1>
            <div className='container-xs'>
              {/* <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                Turn all your marketing pieces into a point of sale!
              </p> */}
            </div>

            <div className='tiles-item-row reveal-from-bottom'>
              <div className='tiles-item-inner-row col-sm-center'>
                <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                  <h2 className='mt-0 mb-8 ta-c-mobile text-color-primary'>
                    Fraud-Proof Credit Card Payments a Reality
                  </h2>
                  <div className='m-0 text-sm ta-c-mobile'>
                    <p className='m-0'>FOR IMMEDIATE RELEASE</p>
                    <p className='m-0'> Media Contact: Ben Cvetkovich</p>
                    <p className='m-0'>Phone: 970-227-6088</p>
                    <p className='m-0'> Email: ben@world-xchange.com</p>
                  </div>
                </div>
                <br />
                <br />
                <div className='features-tiles-item-header pr-8'>
                  <div className='features-tiles-item-image-news mb-16'>
                    <Image
                      src={require('../../../assets/images/test-purchase-code.png')}
                      alt='Features tile icon 01'
                      width={296}
                      height={242}
                    />
                  </div>
                </div>
              </div>
              <div className='container text-left'>
                <p>
                  Loveland, Colorado (April 15, 2019)--World XChange, Inc.
                  announces the first public peek of their fraud proof payment
                  processing platform that is guaranteed to be 100% secure
                  against all possible fraud attempts during a card transaction.
                  This peek is available on the World XChange website as well as
                  by searching for World XPay in the Apple App store and Google
                  Play. While their technology is currently under patent pending
                  protection, the company will have filled international patents
                  in 17 countries before the end of the year in preparation for
                  their US launch slated for Q2 of 2019.
                </p>
                <p>
                  While World XChange is holding their cards very close to their
                  chest currently, they are now explaining on a high level how
                  their technology works. Basically, consumers no longer hand
                  over their very sensitive credit card information to a
                  complete stranger at the checkout. The merchant presents what
                  they call a Purchase Request or Code to the consumer. The
                  consumer then communicates with the payment networks directly
                  through the World XPay App that completes the transaction. The
                  loop is closed when the merchant receives notification that
                  the transaction has been successful--all of which happens in
                  less than three seconds. The technology is somewhat
                  reminiscent of an e-wallet app but World XChange's co-inventor
                  and CEO, Ben Cvetkovich, is quick to point out that it's
                  nothing like an e-wallet. "E-wallets still store your card
                  information on the device and you still have to present it to
                  that stranger behind the counter or on the other side of the
                  screen online--which is really scary when you think about it."
                </p>
                <p>
                  Coming on the heels of the very expensive and marginally
                  effective roll-out of EMV chip technology, the news of a truly
                  secure means of payment processing is met with relief
                  according to Ben. "Whenever we present our tech, whether it be
                  to consumers, banks or merchants, they first say something
                  along the lines of, "It's about time someone figured that
                  out," followed by, "how can I get my hands on it!"
                </p>
                <p>
                  Ben continues, "Because of the way our tech works, it creates
                  synergy in the form of benefits and opportunities at every
                  point in the transaction chain, starting with the consumer all
                  the way up to the banks. It's very exciting!"
                </p>
                <p>
                  When pushed for more information about these exciting
                  synergetic benefits, Ben just smiled, but he did mention
                  something called Push Purchases and how it was going to be the
                  next really BIG thing in marketing.
                </p>
                <p>
                  The founders of World XChange first conceived their
                  industry-changing technology during the first few days of 2018
                  while working together on an unrelated project. But despite
                  its sheer infancy, Ben says they are well beyond
                  proof-of-concept and already have the first release in the
                  World XPay App in the Apple and Google app stores. It is
                  anticipated the app will be moderately priced, though an exact
                  figure has not been decided. "We want it to be readily
                  available to everyone but by charging a nominal fee, we can
                  ensure a rapid, global roll-out before the end of 2020," says
                  Ben.
                </p>
                <p>
                  The World XChange, fraud free technology will be available for
                  brick and mortar, e-commerce, and over the phone sales in its
                  initial release. They anticipate that the technology will be
                  available for all markets though according to Ben, there are
                  still a few more hoops before they are certified in all
                  markets such as lodging transactions.
                </p>
                <p>
                  Since the claims of a fraud-proof technology might be received
                  with skepticism in the industry, World XChange pre-empted
                  concerns by submitting their technology to several key
                  industry players, to review and validate the claim. To date,
                  the consensus has been 100% unanimous--fraud of any kind
                  during a transaction is impossible with World XPay. These key
                  industry players will be announced in the coming months once
                  the World XChange technology has been certified and available
                  as a payment option on each respective network.
                </p>
                <p>
                  According to Greg Meyers, World XChange's CTO and co-inventor,
                  the fraud proof payment platform is just the first of several
                  innovative and very disruptive technologies currently being
                  developed for the payment processing industry; an industry,
                  according to Greg, that is long overdue for a complete
                  makeover.
                </p>
                <p>
                  "It's really rather odd," says Greg, "The industries which
                  stand the most to gain from technological advances seem to be
                  the slowest to evolve, such as banking. Part of the reason for
                  this is because of their extreme importance in society. You
                  don't want to go experimenting new tech on payment networks.
                  But the other reason why we see relatively unchanged processes
                  for the better part of a century (as with credit cards) is
                  because change usually means new hardware and expense incurred
                  at every point for everyone; merchants, banks and consumers.
                  Take the EMV chip for example. The cost of that upgrade will
                  probably end up being over 10 billion for the industry. But
                  what's most tragic is that 10 billion dollar upgrade has only
                  marginally slowed transaction fraud and in another 4 or 5
                  years, I predict it will be mostly ineffective once the
                  hackers and thieves catch up."
                </p>
                <p>
                  The global roll-out of the technology is very aggressive even
                  by technology start-up standards but to help grease the rails,
                  Ben and Greg made sure there would be very few barriers to
                  adoption for both merchant and consumer as Greg explains, "One
                  of the most exciting features of our tech is that the adaption
                  costs are very low; under a few hundred for the merchant and
                  no cost at all for acquirers and consumers."
                </p>
                <p>
                  Besides low barriers for adaption, World XChange provides
                  several very tangible benefits to both merchants and
                  consumers, one of which is increased financial privacy. Most
                  have probably experienced the embarrassment of having a card
                  declined and having it announced to everyone within earshot.
                  With World XChange, only the consumer gets notified of a
                  decline, privately within the XPay App. The consumer can then
                  privately select a different card or simply decline to make
                  the purchase. The only thing the merchant (or anyone standing
                  close by) knows is that you decided not to purchase because...
                  you fill in the blank. "Your finances are no one else's
                  business, especially not strangers at a store," says Greg with
                  conviction. "It's a little thing but an important one I think
                  in winning back some of our privacy today."
                </p>
                <p>
                  World XChange knows any new technology is met with resistance
                  unless the benefits far outweigh any habit changes. According
                  to Ben and Greg, consumers won't have to change anything they
                  are already currently doing and merchants can train employees
                  in less than 5 minutes; everything else works the same. "When
                  we were designing early on, we knew we had to make the tech
                  run on existing networks and if it at all possible, use
                  existing cards. We were able to accomplish both, while at the
                  same time removing burdensome PCI compliance headaches for
                  merchants, among several other important things."
                </p>
                <p>
                  The Loveland-based company began rolling-out the World XPay
                  platform in April (2019) in North America, with plans to
                  expand into Europe in 2020.
                </p>
              </div>
              <div className='container'>
                <div className='features-tiles-item-content text-left '>
                  <h2 className='mt-0 mb-8 ta-c-mobile text-color-primary'>
                    About World XChange Inc.
                  </h2>
                  <div className='m-0 text-sm text-left'>
                    <p>
                      World XChange Inc. is a global payment platform able to
                      process any payment type in any currency, guaranteed
                      fraud-free. World XChange was founded in 2018 by veterans
                      of the payment processing and technology industries, who
                      combined their experience to solve the biggest problem in
                      payment processing. Their flagship product, World XPay
                      began rolling out in April 2019 in North America. For more
                      information contact Ben Cvetkovich at 970-227-6088 or
                      visit world-xchange.com.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewsReleases.propTypes = propTypes;
NewsReleases.defaultProps = defaultProps;

export default NewsReleases;
