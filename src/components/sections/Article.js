import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Cta from './Cta';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Article = ({
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
    'hero section',
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

  const sectionHeader = {
    title: 'WELCOME TO XPAY',
    paragraph: 'Cashless made effortless'
  };

  return (
    <section {...props} className={outerClasses}>
      <br />
      <br />
      <br />
      <SectionHeader
        data={sectionHeader}
        className='center-content reveal-from-top'
      />
      <div className='container-xs hero-content'>
        <div
          className='reveal-from-bottom center-content'
          data-reveal-delay='600'
        >
          <ButtonGroup>
            <Button
              tag='a'
              color='primary'
              wideMobile
              href='/contact'
              className='reveal-from-left'
            >
              Get started
            </Button>
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
      <br />
      <div className='container col-sm reveal-from-top'>
        <div
          className={`${innerClasses} flex-row-around revel-from-left col-sm-center  bg-color-dark`}
        >
          <div className=' flex-col-center center-content'>
            <h3
              className='mt-0 mb-16 reveal-from-bottom fs-50 lh-60'
              data-reveal-delay='200'
            >
              HOW TO USE <br />
              <span className='text-color-primary'>XPAY</span>
            </h3>
          </div>
          <div
            className='hero-figure reveal-from-bottom illustration-element-04  center-content fs-50 lh-60'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none  sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_2.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div
          className={`${innerClasses} flex-row-around col-sm-center  bg-color-dark`}
        >
          <div
            className='hero-figure reveal-from-bottom illustration-element-04 center-content fs-50 lh-60'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_4.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
          <div className=' flex-col-center  center-content '>
            <h3
              className='mt-0 mb-16 reveal-from-bottom fs-50 lh-60'
              data-reveal-delay='200'
            >
              Add your checkout directly to{' '}
              <span className='text-color-primary'>ANY EMAIL</span>
            </h3>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div
          className={`${innerClasses} flex-row-around col-sm-center  bg-color-dark`}
        >
          <div className=' flex-col-center center-content '>
            <h3
              className='mb-8 mb-16 reveal-from-bottom fs-50 lh-60'
              data-reveal-delay='200'
            >
              <span className='text-color-primary'>Your Business Card</span> is
              now your POS
            </h3>
          </div>
          <br />
          <div
            className='hero-figure reveal-from-bottom illustration-element-04  center-content'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_6.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div
          className={`${innerClasses} flex-row-around col-sm-center  bg-color-dark`}
        >
          <div
            className='hero-figure reveal-from-bottom illustration-element-04 center-content'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_5.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
          <div className=' flex-col-center  center-content'>
            <h3
              className='mt-0 mb-16 reveal-from-bottom fs-50 lh-60'
              data-reveal-delay='200'
            >
              Now <span className='text-color-primary'>SOCIAL MEDIA,</span> is
              even easier.
            </h3>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />

        <div
          className={`${innerClasses} flex-row-around col-sm-center  bg-color-dark`}
        >
          <div className=' flex-col-center center-content center-content'>
            <h3
              className='mt-0 mb-16 reveal-from-bottom fs-50 lh-60'
              data-reveal-delay='200'
            >
              Place An Order{' '}
              <span className='text-color-primary'>FROM ANY TV</span>
            </h3>
          </div>
          <br />
          <div
            className='hero-figure reveal-from-bottom illustration-element-04  center-content'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_10.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />

        <div
          className={`${innerClasses} flex-row-around col-sm-center  bg-color-dark`}
        >
          <div
            className='hero-figure reveal-from-bottom illustration-element-04 center-content '
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <img
              className='has-shadow mw-none sm-w-100'
              src={require('./../../assets/images/wxc/merch/merch_1.png')}
              alt='Hero'
              width={538}
              height={183}
            />
          </div>
          <br />
          <div className=' flex-col-center  center-content '>
            <h3
              className='mt-0 mb-0 reveal-from-bottom center-content fs-50 lh-60'
              data-reveal-delay='200'
            >
              Welcome to
            </h3>
            <h1 className='text-color-primary mt-0 pt-0'>XPAY</h1>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>
      <Cta split />
    </section>
  );
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
