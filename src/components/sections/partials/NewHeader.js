import React from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

export default function NewHeader({ className, title, subheading, textBox }) {
  console.log(className);
  const outerClasses = classNames('new-header', className);
  return (
    <div className='container'>
      <br />
      <br />
      <header className={outerClasses}>
        <div className={textBox}>
          <h1 className='heading-primary center-content'>
            <span className='new-header-primary-main sm-hide'>{title}</span>
            <span className='new-header-primary-sub'>{subheading}</span>
          </h1>
          <br />
          <br />
          <div className='flex-row-center'>
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
              <Button
                tag='a'
                color='dark'
                wideMobile
                href='/article'
                className='reveal-from-right'
              >
                Learn More &#8594;
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </header>
    </div>
  );
}
