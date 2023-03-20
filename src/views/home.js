import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Interactions Consultant</title>
        <meta property="og:title" content="Future Interactions Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
