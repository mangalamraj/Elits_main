import React from 'react'
import './services.scss'




const Services = () => {


  return (
    <div className="background">
      <div className="section1">
        <h1>Landing Page</h1>
      </div>
      <div className="section2">
        <h1>Our Services</h1>
  
        <div className="section3">
          <div className="section3a">
            <div className="des1-section">
            </div>
            <div className="des2-section">
              <h2>Design</h2>
              <p>We build engaging designs.</p>
            </div>
          </div>
          
          <div className="section3b">
            <div className="cod1-section">
            </div>
            <div className="cod2-section">
              <h2>Code</h2>
              <p>Mern stack developement.</p>
            </div>
          </div>
          <div className="section3c">
            <div className="dev1-section">
            </div>
            <div className="dev2-section">
              <h2>Develop</h2>
              <p>Get satisfactory results.</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Services