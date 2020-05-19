import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const AboutHero = ({
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
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1 className='mt-0 mb-16 reveal-from-top' data-reveal-delay='200'>
              {' '}
              {title}
            </h1>
          </div>
          <p>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

AboutHero.propTypes = propTypes;
AboutHero.defaultProps = defaultProps;

export default AboutHero;
