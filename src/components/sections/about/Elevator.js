import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Elevator = ({
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
          className='tiles-item-press reveal-from-bottom'
          data-reveal-delay='200'
        >
          <div className='tiles-item-inner'>
            <h4>OUR ELEVATOR STATEMENT</h4>
            <div className='flex-row col-sm'>
              <div className='pr-16 w-100'>
                <img
                  src={require('./icon_elevator.png')}
                  alt='Open'
                  width={128}
                  height={128}
                />
              </div>
              <br />
              <p className='text-sm mb-0 text-dark text-left'>
                <span className='testimonial-item-link'>
                  World XPay is the world's first and only guaranteed
                  fraud-proof payment platform.
                </span>{' '}
                Our patent-pending technology also provides a layer of privacy,
                never before equaled in card processing and shifts the locus of
                control to the consumer. Elegant in design and smooth in
                presentation, our technology simplifies the entire payment
                process, making transactions easier and faster. World XPay
                changes how cards work on the existing payment networks, which
                not only revolutionizes the payment industry but sales,
                marketing, and advertising as well. Our powerful and very
                disruptive Push Sale Technology changes the entire sales
                landscape, heralding the end of sales funnels, abandoned carts
                and even the click-through statistic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Elevator.propTypes = propTypes;
Elevator.defaultProps = defaultProps;

export default Elevator;
