import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Superficial Eminent Donkey</title>
        <meta property="og:title" content="Superficial Eminent Donkey" />
      </Helmet>
    </div>
  )
}

export default Home
