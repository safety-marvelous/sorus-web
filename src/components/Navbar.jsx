import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/solaurus.png';
import {Link} from 'react-scroll';
import './Navbar.css';
// import Fade from 'react-reveal/Fade';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        // <Fade>
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                <img src={logo} alt='logo' style={{width: "130px", height: "90px"}} />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#0ea9e2' }} />)
                        : (<FaBars size={30} style={{ color: '#0ea9e2' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to="hero" spy={true} smooth={true} duration={1000} offset={50} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} duration={1000} offset={50} onClick={closeMenu}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
        // </Fade>
    )
}

export default Navbar
