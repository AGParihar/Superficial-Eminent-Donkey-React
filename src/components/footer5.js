import React from 'react'

import PropTypes from 'prop-types'

import './footer5.css'

const Footer5 = (props) => {
  return (
    <div className="footer5-footer8 thq-section-padding">
      <div className="footer5-max-width thq-section-max-width">
        <div className="footer5-content">
          <div className="footer5-column">
            <div className="footer5-logo">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="footer5-logo1"
              />
              <div className="footer5-links">
                <span className="thq-body-small">{props.link1}</span>
                <span className="thq-body-small">{props.link2}</span>
                <span className="thq-body-small">{props.link3}</span>
                <span className="thq-body-small">{props.link4}</span>
                <span className="thq-body-small">{props.link5}</span>
              </div>
            </div>
          </div>
          <div className="footer5-actions">
            <span className="thq-body-small">{props.content1}</span>
            <div className="footer5-actions1">
              <div className="footer5-form">
                <div className="footer5-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer5-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer5-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </div>
              <span className="thq-body-small">{props.content2}</span>
            </div>
          </div>
        </div>
        <div className="footer5-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer5-row">
            <div className="footer5-footer-links">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
            <span className="thq-body-small">{props.content3}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer5.defaultProps = {
  link5: 'Link 5',
  action1: 'Subscribe',
  content1: 'Subscribe',
  image1Src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  content3: '© 2024 TeleportHQ',
  link1: 'Link 1',
  privacyLink: 'Privacy Policy',
  cookiesLink: 'Cookies Settings',
  link3: 'Link 3',
  link4: 'Link 4',
  link2: 'Link 2',
  termsLink: 'Terms of Service',
  image1Alt: 'Logo',
  content2:
    'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.',
}

Footer5.propTypes = {
  link5: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  content3: PropTypes.string,
  link1: PropTypes.string,
  privacyLink: PropTypes.string,
  cookiesLink: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link2: PropTypes.string,
  termsLink: PropTypes.string,
  image1Alt: PropTypes.string,
  content2: PropTypes.string,
}

export default Footer5
