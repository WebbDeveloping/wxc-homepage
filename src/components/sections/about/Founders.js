import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';
import Button from '../../elements/Button';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Founders = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  title,
  paragraph,
  press,
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
      <div className='container'>
        <div
          className='tiles-item-press reveal-from-left'
          data-reveal-delay='200'
        >
          <div className='tiles-item-inner'>
            <h2 className='reveal-from-bottom text-color-secondary'>
              Founders and Officers
            </h2>
            <br />
            <div className='flex-row col-sm center-content'>
              <div className='  bg-color-dark m-16 reveal-from-left'>
                <div className='pr-16  p-32'>
                  <img
                    src={require('./avatar_ben.png')}
                    alt='Open'
                    width={200}
                    height={200}
                  />
                  <h4>CFO</h4>
                </div>
                <div className='flex-col  '>
                  <h5 className='testimonial-item-link  pt-0 mt-0'>
                    Benjamin Cvtkovich
                  </h5>
                  <div className='p-16'>
                    <p className='mb-8'>Expertise</p>
                    <p className='text-sm mb-0 text-dark '>
                      Finance • Accounting • International Banking • Taxation •
                      Payment Processing • Auditing & Consulting • Entrepreneur
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='/contact'
                    className='max-width'
                  >
                    ben@world-xchange.com
                  </Button>
                </div>
              </div>

              <div className='  bg-color-dark m-16 reveal-from-right'>
                <div className='pr-16  p-32'>
                  <img
                    src={require('./avatar_greg.png')}
                    alt='Open'
                    width={200}
                    height={200}
                  />
                  <h4>CTO</h4>
                </div>
                <div className='flex-col  '>
                  <h5 className='testimonial-item-link  pt-0 mt-0'>
                    Greg Meyers
                  </h5>
                  <div className='p-16'>
                    <p className='mb-8'>Expertise</p>
                    <p className='text-sm mb-0 text-dark '>
                      Technology • Web & App Development • Marketing • Business
                      Strategy • Data Architecture • Consulting • Entrepreneur
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='/contact'
                    className='max-width'
                  >
                    greg@world-xchange.com
                  </Button>
                </div>
              </div>
              <br />
            </div>
            <div className='flex-row col-sm reveal-from-left'>
              <div className='  bg-color-dark m-16'>
                <div className='pr-16  p-32'>
                  <img
                    src={require('./avatar_sandy.png')}
                    alt='Open'
                    width={200}
                    height={200}
                  />
                  <h4>COO</h4>
                </div>
                <div className='flex-col  '>
                  <h5 className='testimonial-item-link  pt-0 mt-0'>
                    Sandy Weigars
                  </h5>
                  <div className='p-16'>
                    <p className='mb-8'>Expertise</p>
                    <p className='text-sm mb-0 text-dark '>
                      Finance • Accounting • International Banking • Taxation •
                      Payment Processing • Auditing & Consulting • Entrepreneur
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='/contact'
                    className='max-width'
                  >
                    sandy@world-xchange.com
                  </Button>
                </div>
              </div>
              <br />
              <div className='  bg-color-dark m-16 reveal-from-right'>
                <div className='pr-16  p-32'>
                  <img
                    src={require('./avatar_tony.png')}
                    alt='Open'
                    width={200}
                    height={200}
                  />
                  <h4>CSO</h4>
                </div>
                <div className='flex-col  '>
                  <h5 className='testimonial-item-link  pt-0 mt-0'>
                    Tony Speirs
                  </h5>
                  <div className='p-16'>
                    <p className='mb-8'>Expertise</p>
                    <p className='text-sm mb-0 text-dark '>
                      Finance • Accounting • International Banking • Taxation •
                      Payment Processing • Auditing & Consulting • Entrepreneur
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='/contact'
                    className='max-width'
                  >
                    tony@world-xchange.com
                  </Button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Founders.propTypes = propTypes;
Founders.defaultProps = defaultProps;

export default Founders;
