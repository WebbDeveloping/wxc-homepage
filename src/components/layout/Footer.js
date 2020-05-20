import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer {...props} className={classes}>
      <br />
      <br />
      <br />
      <div className='container footer-bg-img'>
        <div
          className={classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}
        >
          <div className='footer-top space-between text-xxs '>
            <div className='flex-row'>
              <Logo className='pr-16' />
              <div>
                <p className='m-0'>PO Box 7492 Loveland, Colorado 80537 USA </p>
                <p className='m-0'> hello@world-xchange.com</p>
                <p className='m-0'> 833-473-XPAY (9729)</p>
              </div>
            </div>
            <FooterSocial />
          </div>
          <div className='footer-bottom space-between text-xxs invert-order-desktop'>
            <FooterNav />
            <div className='footer-copyright'>
              © 2018-2020 World XChange Inc. Patents pending, all rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
