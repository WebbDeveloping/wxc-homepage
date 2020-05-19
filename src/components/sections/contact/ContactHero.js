import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const ContactHero = ({
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
            <h1 className='mt-0 mb-16 reveal-from-top' data-reveal-delay='200'>
              Get Started With <span className='text-color-primary'>XPAY</span>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                Contact our professional sales team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactHero.propTypes = propTypes;
ContactHero.defaultProps = defaultProps;

export default ContactHero;
