import React from 'react'

import PropTypes from 'prop-types'

import './hero13.css'

const Hero13 = (props) => {
  return (
    <div className="hero13-header78">
      <div className="hero13-column thq-section-padding thq-section-max-width">
        <div className="hero13-content">
          <h1 className="hero13-text thq-heading-1">{props.heading1}</h1>
          <p className="hero13-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero13-actions">
          <a
            href="https://www.act.org/content/act/en/products-and-services/the-act/registration.html"
            target="_blank"
            rel="noreferrer noopener"
            className="hero13-button thq-button-filled"
          >
            <span className="thq-body-small">{props.action1}</span>
          </a>
          <button className="hero13-button1 thq-button-outline">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero13-content1">
        <div className="hero13-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="hero13-placeholder-image thq-img-ratio-1-1"
          />
          <img
            alt={props.image2Alt}
            src={props.image2Src}
            className="hero13-placeholder-image01 thq-img-ratio-1-1"
          />
          <img
            alt={props.image3Alt}
            src={props.image3Src}
            className="hero13-placeholder-image02 thq-img-ratio-1-1"
          />
          <img
            alt={props.image4Alt}
            src={props.image4Src}
            className="hero13-placeholder-image03 thq-img-ratio-1-1"
          />
          <img
            alt={props.image5Alt}
            src={props.image5Src}
            className="hero13-placeholder-image04 thq-img-ratio-1-1"
          />
        </div>
        <div className="hero13-row1">
          <img
            alt={props.image6Alt}
            src={props.image6Src}
            className="hero13-placeholder-image05 thq-img-ratio-1-1"
          />
          <img
            alt={props.image7Alt}
            src={props.image7Src}
            className="hero13-placeholder-image06 thq-img-ratio-1-1"
          />
          <img
            alt={props.image8Alt}
            src={props.image8Src}
            className="hero13-placeholder-image07 thq-img-ratio-1-1"
          />
          <img
            alt={props.image9Alt}
            src={props.image9Src}
            className="hero13-placeholder-image08 thq-img-ratio-1-1"
          />
          <img
            alt={props.image10Alt}
            src={props.image10Src}
            className="hero13-placeholder-image09 thq-img-ratio-1-1"
          />
          <img
            alt={props.image11Alt}
            src={props.image11Src}
            className="hero13-placeholder-image10 thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
  )
}

Hero13.defaultProps = {
  image8Alt: 'Team 199 Test 5',
  image8Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image5Src:
    'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1200',
  image11Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image4Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  heading1: 'Test 1245',
  image2Alt: 'Hero Image',
  action2: 'Secondary action',
  image11Src:
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image10Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image1Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1200',
  image5Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1200',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image4Src:
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1200',
  image7Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1200',
  image6Alt: 'Hero Image',
  action1: 'Main action',
  content1: 'What happens',
  image10Alt: 'Hero Image',
}

Hero13.propTypes = {
  image8Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.string,
  image2Alt: PropTypes.string,
  action2: PropTypes.string,
  image11Src: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image7Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image10Alt: PropTypes.string,
}

export default Hero13
