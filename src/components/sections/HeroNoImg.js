import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const HeroNoImg = ({
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
              Safe, Easy, <span className='text-color-secondary'>Private</span>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                We are the Worlds safest, easiest, most private way to pay.
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <ButtonGroup>
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://cruip.com/'
                  >
                    Get started
                  </Button>
                  {/* <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div
            className='hero-figure reveal-from-bottom illustration-element-01'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <a
              data-video='https://player.vimeo.com/video/174002812'
              href='#0'
              aria-controls='video-modal'
              onClick={openModal}
            >
              <Image
                className='has-shadow'
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt='Hero'
                width={896}
                height={504}
              />
            </a>
          </div> */}
          {/* <Modal
            id='video-modal'
            show={videoModalActive}
            handleClose={closeModal}
            video='https://player.vimeo.com/video/174002812'
            videoTag='iframe'
          /> */}
        </div>
      </div>
    </section>
  );
};

HeroNoImg.propTypes = propTypes;
HeroNoImg.defaultProps = defaultProps;

export default HeroNoImg;
