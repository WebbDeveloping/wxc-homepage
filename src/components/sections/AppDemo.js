import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
};

const defaultProps = {
  ...SectionSplitProps.defaults
};

const AppDemo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'MORE THAN JUST A WALLET',
    paragraph: 'Scan to pay with speed and security'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item flex-row-center col-sm'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h1 className='mt-0 mb-12 text-color-secondary'>
                  Digital Banking is...
                </h1>
                <h3 className='m-4 ml-12'> - Fast & Innovative</h3>
                <h3 className='m-4 ml-24'> - Simple & Usable</h3>
                <h3 className='m-4 ml-42'> - Secure & Convenient</h3>
              </div>
              <div
                // className={classNames(
                //   'split-item-image center-content-mobile reveal-from-bottom',
                //   'split-item-image-fill'
                // )}
                data-reveal-container='.split-item'
              >


                <Image
                  src={require('./../../assets/images/wxc/appdemo.png')}
                  alt='Features split 01'
                  width={464}
                  height={198}
                  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AppDemo.propTypes = propTypes;
AppDemo.defaultProps = defaultProps;

export default AppDemo;
