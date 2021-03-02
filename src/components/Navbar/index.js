import React, { useState, useEffect } from 'react'
import { Button } from '../ButtonElements'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { MobileIcon, Nav, NavbarContainer, NavButton, NavItem, NavLinks, NavList, NavLogo } from './NavbarElements'

const Navbar = ({ toggle, isOpen }) => {

    const [scrollNav, setscrollNav] = useState(false);

    const onScrollNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true);
        } else {
            setscrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <img src={require('../../images/logo.svg').default} alt="image" />
                </NavLogo>
                <MobileIcon onClick={toggle} isOpen={isOpen}>
                    <FaBars />
                </MobileIcon>
                <NavList>
                    <NavItem>
                        <NavLinks>Pricing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Product</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Careers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Community</NavLinks>
                    </NavItem>
                </NavList>
                <NavButton>
                    <Button>Get Started</Button>
                </NavButton>
            </NavbarContainer>
        </Nav >
    )
}

export default Navbar
