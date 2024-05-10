import React from 'react'

import PropTypes from 'prop-types'

import './team7.css'

const Team7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team7-max-width thq-section-max-width">
        <div className="team7-section-title">
          <span className="thq-body-small">{props.content1}</span>
          <div className="team7-content">
            <h2 className="team7-text01 thq-heading-2">{props.heading1}</h2>
            <p className="team7-text02 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="team7-content01">
          <div className="team7-card">
            <img
              alt={props.member1Alt}
              src={props.member1Src}
              className="team7-placeholder-image thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content02">
              <div className="team7-title">
                <span className="team7-text03 thq-body-small">
                  {props.member1}
                </span>
                <span className="team7-text04 thq-body-small">
                  {props.member1Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member1Content}</span>
            </div>
            <div className="team7-social-icons">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card1">
            <img
              alt={props.member2Alt}
              src={props.member2Src}
              className="team7-placeholder-image1 thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content03">
              <div className="team7-title1">
                <span className="team7-text06 thq-body-small">
                  {props.member2}
                </span>
                <span className="team7-text07 thq-body-small">
                  {props.member2Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member2Content}</span>
            </div>
            <div className="team7-social-icons1">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card2">
            <img
              alt={props.member3Alt}
              src={props.member3Src}
              className="team7-placeholder-image2 thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content04">
              <div className="team7-title2">
                <span className="team7-text09 thq-body-small">
                  {props.member3}
                </span>
                <span className="team7-text10 thq-body-small">
                  {props.member3Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member3Content}</span>
            </div>
            <div className="team7-social-icons2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card3">
            <img
              alt={props.member4Alt}
              src={props.member4Src}
              className="team7-placeholder-image3 thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content05">
              <div className="team7-title3">
                <span className="team7-text12 thq-body-small">
                  {props.member4}
                </span>
                <span className="team7-text13 thq-body-small">
                  {props.member4Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member4Content}</span>
            </div>
            <div className="team7-social-icons3">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card4">
            <img
              alt={props.member5Alt}
              src={props.member5Src}
              className="team7-placeholder-image4 thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content06">
              <div className="team7-title4">
                <span className="team7-text15 thq-body-small">
                  {props.member5}
                </span>
                <span className="team7-text16 thq-body-small">
                  {props.member5Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member5Content}</span>
            </div>
            <div className="team7-social-icons4">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <div className="team7-card5">
            <img
              alt={props.member6Alt}
              src={props.member6Src}
              className="team7-placeholder-image5 thq-img-round thq-img-ratio-1-1"
            />
            <div className="team7-content07">
              <div className="team7-title5">
                <span className="team7-text18 thq-body-small">
                  {props.member6}
                </span>
                <span className="team7-text19 thq-body-small">
                  {props.member6Job}
                </span>
              </div>
              <span className="thq-body-small">{props.member6Content}</span>
            </div>
            <div className="team7-social-icons5">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="team7-content08">
          <div className="team7-content09">
            <h2 className="team7-text21 thq-heading-2">{props.heading2}</h2>
            <span className="team7-text22 thq-body-small">
              {props.content3}
            </span>
          </div>
          <button className="team7-button thq-button-filled">
            <span className="thq-body-small">{props.actionContent}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Team7.defaultProps = {
  member4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member2Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member6Alt: 'Member Alt',
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  member1Job: 'Job title',
  member1Alt: 'Member Alt',
  member5Alt: 'Member Alt',
  member6: 'Full name',
  content1: 'Join our team and make a difference in your career!',
  member5Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Meet our team',
  member3Alt: 'Member Alt',
  member2Job: 'Job title',
  member5: 'Full name',
  member4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  heading2: 'We’re hiring!',
  member5Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member1: 'Full name',
  member1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member2: 'Full name',
  actionContent: 'Open positions',
  member6Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  member3Job: 'Job title',
  member3Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member4Job: 'Job title',
  member3: 'Full name',
  member5Job: 'Job title',
  member6Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  member2Alt: 'Member Alt',
  member4Alt: 'Member Alt',
  member6Job: 'Job title',
  member4: 'Full name',
}

Team7.propTypes = {
  member4Src: PropTypes.string,
  member2Content: PropTypes.string,
  member6Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member1Job: PropTypes.string,
  member1Alt: PropTypes.string,
  member5Alt: PropTypes.string,
  member6: PropTypes.string,
  content1: PropTypes.string,
  member5Src: PropTypes.string,
  heading1: PropTypes.string,
  member3Alt: PropTypes.string,
  member2Job: PropTypes.string,
  member5: PropTypes.string,
  member4Content: PropTypes.string,
  member2Src: PropTypes.string,
  heading2: PropTypes.string,
  member5Content: PropTypes.string,
  member1: PropTypes.string,
  member1Content: PropTypes.string,
  content3: PropTypes.string,
  member2: PropTypes.string,
  actionContent: PropTypes.string,
  member6Src: PropTypes.string,
  member1Src: PropTypes.string,
  content2: PropTypes.string,
  member3Job: PropTypes.string,
  member3Content: PropTypes.string,
  member4Job: PropTypes.string,
  member3: PropTypes.string,
  member5Job: PropTypes.string,
  member6Content: PropTypes.string,
  member2Alt: PropTypes.string,
  member4Alt: PropTypes.string,
  member6Job: PropTypes.string,
  member4: PropTypes.string,
}

export default Team7
