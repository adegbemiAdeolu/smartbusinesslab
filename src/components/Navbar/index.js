import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, } from './NavbarElements';
import { IoMenuOutline, IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Smart Business Lab
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                         <IoMenuOutline />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='how-it-works' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                What we Do
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='products' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Our Process
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='benefits' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Our Partners
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks >
                                <Link to="/" style={{ textDecoration: 'none', color: '#007F2E'}}>
                                    Contact Us
                                </Link>
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                   
                </NavbarContainer>
            </Nav>
            
        </>
    )
}

export default Navbar
