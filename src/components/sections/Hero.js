import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Hero = ({
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

  const openModal = e => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setVideomodalactive(false);
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
          <div className='hero-content'>
            <h1 className='mt-0 mb-16 reveal-from-top' data-reveal-delay='200'>
              <span className='text-color-primary'>XPAY</span> is the new secure
              way to pay
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                We take your security seriously
              </p>
              <br />
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <ButtonGroup>
                  {/* <Link to='/contact'> */}
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='/contact'
                    className='reveal-from-left'
                  >
                    Get started
                  </Button>
                  {/* </Link>
                  <br /> */}
                  <Link to='/Article'>
                    <Button
                      tag='a'
                      color='dark'
                      wideMobile
                      href='https://world-xchange.com/index.php'
                      classNaame='reveal-from-right'
                    >
                      Learn More &#8594;
                    </Button>
                  </Link>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className='hero-figure reveal-from-bottom illustration-element-01'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <a
              // data-video='https://player.vimeo.com/video/174002812'
              data-video='https://youtu.be/sNwKcG445s8'
              href='#0'
              aria-controls='video-modal'
              onClick={openModal}
            >
              {/* <Image
                className='has-shadow'
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt='Hero'
                width={896}
                height={504}
              /> */}
            </a>
          </div>
          {/* <Modal
            id='video-modal'
            show={videoModalActive}
            handleClose={closeModal}
            // video='https://player.vimeo.com/video/174002812'
            video='https://youtu.be/sNwKcG445s8'
            videoTag='iframe'
          /> */}
          <iframe
            className='intro-video'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/sNwKcG445s8'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
