import React from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Radio from '../../elements/Radio';
import FormLabel from '../../elements/FormLabel';
import Input from '../../elements/Input';
import { Link } from 'react-router-dom';

export default function ContactForm({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    'bg-color-dark',
    'reveal-from-top'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');
  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <div className='flex-row-around col-sm'>
            {/* ADDRESS BOX */}
            <div
              className='tiles-item reveal-from-left '
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content'>
                <h3>Postal Address</h3>
                <br />
                <div className='flex-col text-left'>
                  <div className='flex-row-center'>
                    <div className='features-tiles-item-header pr-16'>
                      <div className=' mb-16'>
                        <Image
                          src={require('../../../assets/Svg/envelop.svg')}
                          alt='Features tile icon 01'
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <p>
                      PO Box 7492 Loveland, Colorado 80537 USA
                      <span className='fs-16'> hello@world-xchange.com</span>
                    </p>
                  </div>
                  <br />
                  <h3 className='center-content'>Social</h3>
                  <br />
                  <div className='flex-row'>
                    <div className='pr-16'>
                      <a href='https://m.facebook.com/officialWorldXChange/'>
                        <svg
                          width='42'
                          height='42'
                          viewBox='0 0 16 16'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='#0081ff'
                        >
                          <title>Facebook</title>
                          <path d='M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z' />
                        </svg>
                      </a>
                    </div>
                    <Link to='https://m.facebook.com/officialWorldXChange/'>
                      <p>OfficialWorldXChange</p>
                    </Link>
                  </div>

                  <br />
                  <div className='flex-row'>
                    <div className='pr-16'>
                      <a href='https://twitter.com/World_Xchange'>
                        <svg
                          width='42'
                          height='42'
                          viewBox='0 0 16 16'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='#0081ff'
                        >
                          <title>Twitter</title>
                          <path d='M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z' />
                        </svg>
                      </a>
                    </div>
                    <Link to='https://twitter.com/World_Xchange'>
                      <p>World_Xchange</p>
                    </Link>
                  </div>
                  <br />
                  <div className='flex-row'>
                    <div className='pr-16'>
                      <a href='https://www.linkedin.com/in/world-xchange-b7860416a/'>
                        <img
                          src={require('../../../assets/Svg/linkedin.svg')}
                          height={42}
                          width={42}
                        />
                      </a>
                    </div>
                    <Link to='https://www.linkedin.com/in/world-xchange-b7860416a/'>
                      <p>World-xChange</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTACT-FORM */}
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content'>
                <h3>I am a...</h3>
                <div className='flex-row-around '>
                  <FormLabel>
                    <Radio />
                    Consumer
                  </FormLabel>
                  <FormLabel>
                    <Radio />
                    Merchant
                  </FormLabel>
                  <FormLabel>
                    <Radio />
                    Acquirer
                  </FormLabel>
                  <FormLabel>
                    <Radio />
                    Banker
                  </FormLabel>
                </div>
                <br />
                <div className='flex-col text-left '>
                  <div className='flex-col'>
                    <Input placeholder='Your e-mail' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Name' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Message' type='textarea' />
                  </div>
                  <br />
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    SEND
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
