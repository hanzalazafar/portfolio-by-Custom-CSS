import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div id='hero' className= "hero-container"
    style={{ backgroundSize:"35%" ,backgroundPosition:"left 20px top 90px"}}
    >
     <Navbar />
     <div className="hero-content">
        <div className='hidden lg:block'></div>
        <div className="hero-text">
            <div className="hero-msin">
                <p  data-aos="zoom-in-up"> Hello <br />I am</p>
                <p  data-aos="zoom-in-up">Hanzala</p>
                
            </div>
        </div>
     </div>
    </div>
  )
}

export default Hero;