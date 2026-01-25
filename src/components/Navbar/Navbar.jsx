import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { ThemeContext } from '../../context';

const Navbar = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [activeNav, setActiveNav] = useState('home');

    const scrollToSection = (id) => {
        setActiveNav(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'research', 'featured', 'experience', 'publications', 'education', 'contact'];
            const scrollPosition = window.scrollY + 200; // Offset for better accuracy

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveNav(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`n-wrapper ${darkMode ? 'n-dark' : 'n-light'}`}>
            <div className="n-left">
                <Toggle />
            </div>
            <div className="n-center">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li className={activeNav === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
                        <li className={activeNav === 'research' ? 'active' : ''} onClick={() => scrollToSection('research')}>Research</li>
                        <li className={activeNav === 'featured' ? 'active' : ''} onClick={() => scrollToSection('featured')}>Featured</li>
                        <li className={activeNav === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>Experience</li>
                        <li className={activeNav === 'publications' ? 'active' : ''} onClick={() => scrollToSection('publications')}>Publications</li>
                        <li className={activeNav === 'education' ? 'active' : ''} onClick={() => scrollToSection('education')}>Education</li>
                        <li className={activeNav === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
