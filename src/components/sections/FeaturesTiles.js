import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
// import '../../assets/css/icons.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'TIME FOR A BETTER WAY TO PAY!',
    paragraph: 'Fraud-proof credit and debit cards are finally here.'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          {/* <div className={tilesClasses}> */}
          <div className='flex-row-center col-sm'>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header flex-col-center'>
                  <div className=' mb-16'>
                    {/* features-tiles-item-image */}
                    <Image
                      src={require('./../../assets/Svg/credit-card.svg')}
                      alt='Features tile icon 01'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>YOUR CARDS</h4>
                  <p className='m-0 text-sm'>
                    {/* Imagine the same cards in your in your wallet, working safer
                    and smarter. */}
                    With XPay, your cards work differently, removing all
                    transactional dangers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header flex-col-center'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/checkmark.svg')}
                      alt='Features tile icon 02'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>FRAUD-PROOF</h4>
                  <p className='m-0 text-sm'>
                    {/* This patent-pending technology is so powerful, transactions
                    are guaranteed to be fraud-proof at the most dangerous part
                    of every purchase, merchant handling. */}
                    With XPAY we keep your card away from danger and merchant
                    handling.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header flex-col-center'>
                  <div className='mb-16 ml-32'>
                    <Image
                      src={require('./../../assets/Svg/lock.svg')}
                      alt='Features tile icon 03'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>SECURE</h4>
                  <p className='m-0 text-sm'>
                    {/* Your accounts are only as secure as your wallet. With XPay,
                    you can leave your cards at home or in a safety deposit box
                    where something so dangerous belongs. */}
                    Your accounts are only as secure as your wallet. Leave your
                    cards at home and start paying with XPAY.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header flex-col-center'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/shield.svg')}
                      alt='Features tile icon 04'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>PRIVATE</h4>
                  <p className='m-0 text-sm'>
                    {/* In addition to being secure, XPay gives you privacy. The
                    only thing a retailer gets is the payment amount. All your
                    personal information remains safe and secure. */}
                    We Keep your personal information safe & secure.
                  </p>
                </div>
              </div>
            </div>

            {/* <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt='Features tile icon 05'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Robust Workflow</h4>
                  <p className='m-0 text-sm'>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Robust Workflow</h4>
                  <p className='m-0 text-sm'>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
