// import john from '/john-doe.png'
import './About.css'
import Fade from 'react-reveal/Fade';
import Spline from '@splinetool/react-spline';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const images = ['/2.png', '/3.png', '/4.png', '/5.png'];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(oldImage => {
                const newIndex = (images.indexOf(oldImage) + 1) % images.length;
                return images[newIndex];
            });
        }, 300); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);
    return (
        <>
        <Fade>
        <div className='about' id='about'>
            <div className='container'>
            <div className="spline-about">
            <Spline scene="https://prod.spline.design/4GkLwMjIrUrwMGPA/scene.splinecode" />
            </div>
                <div className='col-2'>
                    <h1>About</h1>

                </div>
            </div>
            <div className='grid-wrapper'>
                <Fade left>
            <div className="grid1"><img src={currentImage} alt="description1" /></div>
            </Fade>
            <Fade right>
            <div className="grid2">
                <br />
                <h1>Liquidity</h1>
                <p>100% BURN</p>
                </div>
                </Fade>
                <Fade right>
            <div className="grid3">
                <br />
                <h1>Contract Feature</h1>
                <p>As of many of spl-tokens dont have any suspicious function besides Mint & Freeze Authority </p>
                <h4>Mint & Freeze Authority Will Be Revoke</h4>
                <br />
                <br />
                <h2>Tokenomics : </h2>
                <p>Team will have 20% of the supply</p>
                <p>15% for marketing</p>
                <p>5% for the team itself</p>
            </div>
            </Fade>
            <Fade left>
            <div className="grid4">
                <h1>NFT</h1>
                <p>Mint will be live after token launch</p>
                <p></p>
            </div>
            </Fade>
            <Fade bottom>
            <div className="grid5">
                <h1>Tax</h1>
                <p>0 / 0 %</p>
            </div>
            </Fade>
            <Fade bottom>
            <div className="grid6">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="2x"/>
            </a>
        </div>
        </Fade>
        <Fade right>
        <div className="grid7">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="2x"/></a>
        </div>
        </Fade>
        </div>
        </div>
        </Fade>
        </>
    )
};

export default About;


