import React from 'react'
import "./about.css"
import stats from "../../assets/stats.jpg";


const About = () => {
  return (
    <div className='about' id='About'>
      <div className='left-child'>
        <img src={stats} alt="" />
      </div>
      <div className='right-child'>
        <div className='right-heading'>
          <h1>unraveling the world of cryptoCurrency</h1>
          <h3>Out Story Our Mission</h3>
        </div>
        {/* come up with your best liine lol */}
        <p className='right-para'>
          Discover the future of finance with us , 
          we are your source for all things crypto,
          providing insight , new , analysis in the world of digital assets.
        </p>
        <h4 className='right-end'>
          welcome to the future of financial possibilities
        </h4>
      </div>
    </div>
  )
}

export default About