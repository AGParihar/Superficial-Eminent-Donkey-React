import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar7 from '../components/navbar7'
import Hero13 from '../components/hero13'
import Features23 from '../components/features23'
import Gallery2 from '../components/gallery2'
import Team7 from '../components/team7'
import Contact6 from '../components/contact6'
import FAQ14 from '../components/faq14'
import CTA3 from '../components/cta3'
import Footer5 from '../components/footer5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Superficial Eminent Donkey</title>
        <meta property="og:title" content="Superficial Eminent Donkey" />
      </Helmet>
      <div className="home-navbar1">
        <Navbar7></Navbar7>
      </div>
      <div className="home-hero2">
        <Hero13></Hero13>
      </div>
      <div className="home-features3">
        <Features23></Features23>
      </div>
      <div className="home-gallery4">
        <Gallery2></Gallery2>
      </div>
      <div className="home-team5">
        <Team7></Team7>
      </div>
      <div className="home-contact6">
        <Contact6></Contact6>
      </div>
      <div className="home-faq7">
        <FAQ14></FAQ14>
      </div>
      <div className="home-cta8">
        <CTA3></CTA3>
      </div>
      <div className="home-footer9">
        <Footer5></Footer5>
      </div>
    </div>
  )
}

export default Home
