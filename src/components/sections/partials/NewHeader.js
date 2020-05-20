import React from 'react';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

export default function NewHeader() {
  return (
    <div className='container'>
      <br />
      <br />
      <header className='new-header'>
        <div className='new-header__text-box'>
          <h1 className='heading-primary'>
            <span className='new-header-primary-main'></span>
            <span className='new-header-primary-sub'></span>
          </h1>
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
      </header>
    </div>
  );
}
