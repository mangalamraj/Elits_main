import React, { useEffect, useRef } from 'react';
import './services.scss';

const Services = () => {
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentRef.classList.add('fade-in');
          currentRef.querySelectorAll('.slide-in').forEach((el) => {
            el.classList.add('slide-in-active');
          });
          observer.unobserve(currentRef);
        }
      });
    });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className="background">
      <div className="section1">
        <h1>Landing Page</h1>
      </div>
      <div className="section2">
        <h1>Our Services</h1>
  
        <div className="section3 scroll-snap" ref={ref}>
          <div className="section3a slide-in">
            <div className="des1-section">
            </div>
            <div className="des2-section">
              <h2>Design</h2>
              <p>We build engaging designs.</p>
            </div>
          </div>
          
          <div className="section3b slide-in">
            <div className="cod1-section">
            </div>
            <div className="cod2-section">
              <h2>Code</h2>
              <p>Mern stack developement.</p>
            </div>
          </div>
          <div className="section3c slide-in">
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
  );
};

export default Services;

