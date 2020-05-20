import React from 'react';
import classNames from 'classnames';

export default function VideoSection(
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
) {
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
}
