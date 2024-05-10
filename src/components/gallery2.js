import React from 'react'

import PropTypes from 'prop-types'

import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div className="gallery2-gallery3 thq-section-padding">
      <div className="gallery2-max-width thq-section-max-width">
        <div className="gallery2-section-title">
          <h2 className="gallery2-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery2-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery2-content">
          <div className="gallery2-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery2-image1 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery2-image2 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery2-image3 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container3">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery2-image31 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery2.defaultProps = {
  image2Alt: 'PlaceholderImage1302',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image1Alt: 'PlaceholderImage1302',
  image3Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  heading1: 'Photo Gallery',
  image4Alt: 'PlaceholderImage1302',
}

Gallery2.propTypes = {
  image2Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  heading1: PropTypes.string,
  image4Alt: PropTypes.string,
}

export default Gallery2
