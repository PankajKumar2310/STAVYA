import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ganpati from '../images/cultxlogo.png';
import '../components_css/Navbar.css';
import '../components_res/Navbar.css';
import { gsap } from 'gsap';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinksRef = useRef(null);  // Reference for the navbar links
    const logoRef = useRef(null);  // Reference for the logo

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // Toggle menu visibility
    };

    useEffect(() => {
        // GSAP animation for navbar links and logo
        if (navLinksRef.current && logoRef.current) {
            gsap.fromTo(
                navLinksRef.current.children,
                { opacity: 0, x: 100 }, // Start position off to the right
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1, // Add some delay between the links
                    duration: 1,
                    ease: "power3.out", // Smooth easing
                }
            );

            gsap.fromTo(
                logoRef.current,
                { opacity: 0, x: 100 }, // Start position off to the right
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5, // Logo comes in slower
                    ease: "power3.out",
                }
            );
        }
    }, []);  // Empty dependency array to run once when the component mounts

    return (
        <div className="nav-main-div">

            <div className="logo" ref={logoRef}>
                <img src={ganpati} alt="Logo" />
            </div>

            <div className="nav-links" ref={navLinksRef}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Glimpse</a>
                <a href="#">Members</a>
                <a href="#">Clubs</a>
                <a href="#">Contacts</a>
            </div>

            <div className="ham-div">
                <a className="hamburgur">
                    <MenuIcon onClick={handleMenuToggle} sx={{
                        fontSize: 40,
                        '@media (max-width: 768px)': {
                            fontSize: 25,
                        },
                        '@media (max-width: 390px)': {
                            fontSize: 25,
                        },
                        '@media (max-width: 350px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 320px)': {
                            fontSize: 16,
                        }
                    }} />
                </a>
                {menuOpen && (
                    <div className="mobile-menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Glimpse</a>
                        <a href="#">Members</a>
                        <a href="#">Clubs</a>
                        <a href="#">Contacts</a>
                    </div>
                )}
            </div>
        </div>
    );
}
