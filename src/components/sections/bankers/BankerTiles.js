import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import BankTiles from './BankTiles';
import NewHeader from '../partials/NewHeader';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const MerchantTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const {
    tileOneHead,
    tileTwoHead,
    tileThreeHead,
    tileOneText,
    tileTwoText,
    tileThreeText,
    title,
    paragraph,
    heroImg
  } = props;

  const sectionHeader = {
    title: title,
    paragraph: paragraph
  };

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
          <SectionHeader data={sectionHeader} className='center-content' />
          <NewHeader
            className={'new-header-bankers lg-hide'}
            title={'A Better Way To Pay'}
            // subheading={'when you know your purchase was safe, secure and private.'}
            titleClass={'title-class'}
            subClass={'subheading-class'}
            textBox={'new-header__text-box'}
          />
        </div>
      </div>
      <BankTiles
        tileOneHead={tileOneHead}
        tileTwoHead={tileTwoHead}
        tileThreeHead={tileThreeHead}
        tileOneText={tileOneText}
        tileTwoText={tileTwoText}
        tileThreeText={tileThreeText}
      />
    </section>
  );
};

MerchantTiles.propTypes = propTypes;
MerchantTiles.defaultProps = defaultProps;

export default MerchantTiles;
