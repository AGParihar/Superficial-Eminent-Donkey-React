import React from 'react'

import PropTypes from 'prop-types'

import './cta3.css'

const CTA3 = (props) => {
  return (
    <div className="cta3-container thq-section-padding">
      <div className="cta3-max-width thq-section-max-width">
        <div className="cta3-container1 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta3-placeholder-image thq-img-ratio-16-9"
          />
          <div className="cta3-column">
            <span className="thq-heading-2">{props.content1}</span>
            <p className="thq-body-small">{props.content2}</p>
            <div className="cta3-actions">
              <button type="button" className="thq-button-filled">
                {props.action1}
              </button>
              <button type="button" className="thq-button-outline">
                {props.action2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA3.defaultProps = {
  action2: 'Action2',
  content1: 'Medium length heading goes here',
  content2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  image1Alt: 'Image1Alt',
  action1: 'Action1',
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

CTA3.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default CTA3
