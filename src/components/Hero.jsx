import React from 'react';
import './Hero.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    
    return (
/* <div className="hero">
    <h1>Solaurus</h1>
    <p>Welcome to the wonderful Dino Land on SOL</p>
    <div className="spline-hero">
    <Spline scene="https://prod.spline.design/i-ZPyXm639R-jhIc/scene.splinecode" />
    </div>
</div> */
<>
<div className="hero">
    
    <div className="text-section">
        <h1>Rwwraaaahhh</h1>
        <br />
        <br />
        <h1>Welcome to the wonderful Dino Land on SOL</h1>
 
    </div>
    
    <div className="spline-hero">
        <Spline scene="https://prod.spline.design/i-ZPyXm639R-jhIc/scene.splinecode" />
    </div>
    <div className="another-text">
        <h2><a href="https://telegram.org/" target="_blank">Contract Address : sol124fsa134</a></h2>
        <h1>Scroll down</h1>
        
    </div>
    
</div>
</>
    );
};





export default Hero;